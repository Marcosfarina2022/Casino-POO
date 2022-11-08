let colores = require('colors');
var fs = require('fs');
export class BlackJack {
    protected carta: number[];
    protected apuestaMinima: number;
    protected blackJack: number;
    protected pozoGanador: number;
    public estadistica:string;
    protected partidasGanadas:number;
    protected partidasPerdidas:number;
    protected partidasJugadas: number;

    constructor() {
        this.carta = [];
        this.apuestaMinima = 1500;
        this.blackJack = 21;
        this.pozoGanador = 100000;
        this.partidasGanadas=0;
        this.partidasPerdidas=0;
        this.partidasJugadas=0;
        this.estadistica = " no Jugo";
    }

    public sumarEstadistica():void{
        this.estadistica = "\n jugo: "+this.partidasJugadas+"\n Gano: "+this.partidasGanadas+"\n Perdio: "+this.partidasPerdidas;
    }

    public manipular(nombre: string, texto: string): void {
        fs.writeFile(nombre, texto, error => {
            if (error) {
                console.log(colores.red.bold('ERROR'));
            } else {
                console.log(colores.green.bold('SE CREO EL ARCHIVO'));
            }
        });
    }
    public modificarArchivo(nombre: string, texto: string): void {
        this.manipular(nombre, texto);
    }
    public leerArchivo(path: string): string {
        let txtFile: string = fs.readFileSync(path, 'utf-8');
        return txtFile;
    }

    public ingresarApuesta(): void {
        let opcionApuesta = require('readline-sync');
        let nuevaApuesta: number = 0;
        console.log(colores.brightBlue.italic('La apuesta miníma para este juego es') + '\n' + colores.brightGreen('$ ' + this.obtenerApuestaMinima() + ' ' + 'Pesos') + '\n');
        let ingresoDeApuesta = Number(opcionApuesta.question(colores.brightBlue.italic('Desea ingresar apuesta?') + '\n' + colores.blue.italic('SI ==> 1' + '\n' + 'NO ==> 2  ') + '\n'));
        switch (ingresoDeApuesta) {
            case 1:
                nuevaApuesta = Number(opcionApuesta.question(colores.brightGreen.bold('Ingresar apuesta ===> ' + '\n')));
                if (nuevaApuesta >= this.apuestaMinima) {
                    this.primeraMano();
                } else {
                    console.log(colores.red.bold('Apuesta insuficiente' + '\n'));
                    this.ingresarApuesta();
                }

            case 2:
                console.log(colores.brightBlue.italic('Gracias por elegir Black Jack, va a salir del juego.'));
                break;
        }
    }


    private obtenerApuestaMinima(): number {
        return this.apuestaMinima;
    }
    private repartir(): number[] {
        let cartas: number[] = new Array;
        cartas.push(Math.floor(Math.random() * (10 - 1) + 1));
        cartas.push(Math.floor(Math.random() * (10 - 1) + 1));
        return cartas;

    }
    private nuevaCarta(): number {
        let cartaNueva: number;
        cartaNueva = (Math.floor(Math.random() * (10 - 1) + 1));
        return cartaNueva;
    }
    private obtenerResultado(): number {
        let contador: number = 0;
        for (let i: number = 0; i < this.carta.length; i++) {
            contador += this.carta[i];
        }
        return contador;
    }
    private primeraMano(): void {
        let opcion = require('readline-sync');
        let as: number = -1;
        let asVariante: number = 11;
        this.carta = this.repartir();
        this.partidasJugadas += 1;
        console.log(colores.blue.italic('°°°° Su mano °°°°') + '\n' + colores.red.bold('#  ' + this.carta) + '\n' + colores.blue.italic('=-=-= Total en mano =-=-=') + '\n' + colores.green.bold('#  ' + this.obtenerResultado()) + '\n');
        let pedirCarta: number = 1;
        let cartaNueva: number;
        let aux: number = 0;
        while (this.obtenerResultado() < this.blackJack && pedirCarta == 1) {
            cartaNueva = this.nuevaCarta();
            console.log(colores.brightBlue.italic('=-=-= Su carta es =-=-=') + '\n' + colores.red.bold('# ' + cartaNueva) + '\n');
            if (cartaNueva === 1) {
                console.log(colores.brightWhite.bold('*=*=*=* Saco un AS ') + colores.red.bold(cartaNueva + ' *=*=*=* ') + '\n' + colores.brightBlue.italic('*=*=*=* Puede elegir 2 opciones *=*=*=*') + '\n');
                console.log(colores.brightBlue(colores.brightBlue.italic('Opción 1 se restara 1 del total de su mano' + '\n' + 'Opción 2 se sumaran 11 al total de su mano')));
                aux = Number(opcion.question(colores.brightGreen.bold('Restar ===> 1') + '\n' + colores.brightRed.bold('Sumar ===> 2') + '\n'));
                if (aux === 1) {
                    cartaNueva = as;
                } else {
                    cartaNueva = asVariante;
                }
            }
            this.carta.push(cartaNueva);
            console.log(colores.brightBlue.italic('=-=-= Resultado =-=-=') + '\n' + colores.brightRed.bold('# ' + this.obtenerResultado()) + '\n');
            if (this.obtenerResultado() < this.blackJack) {
                let crupier: string = 'Crupier';
                pedirCarta = Number(opcion.question(colores.yellow.bold('- ') + colores.blue.bold(crupier) + '\n' + colores.brightBlue.italic('Desea una nueva carta?' + '\n' + colores.blue.italic.bold('Nueva Carta ===> 1' + '\n' + 'Pararse ===> 2')) + '\n'));
            }

            if (this.obtenerResultado() === this.blackJack) {
                console.log(colores.green.bold.italic(('*=*=*=* FELICITACIONES =*=*=* ' + '\n' + ' *=*=*=* Saco un black Jack =*=*=* ' + '\n' + colores.green.bold('Ha ganado el pozo acumulado de $ ' + this.pozoGanador) + '\n')));
                this.partidasGanadas +=1;
            } else if (this.blackJack < this.obtenerResultado()) {
                console.log(colores.red.italic('!=!=! Usted perdio, supero ' + '# ' + this.blackJack + ' !=!=!') + '\n');
                this.partidasPerdidas+=1;
            }



        }
    }

    public jugar(): void {
        this.ingresarApuesta();
        
    }

}
