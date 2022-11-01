export class BlackJack {
    protected carta: number[];
    protected resultado: number;
    protected pedirOtraCarta: number;
    constructor() {
        this.carta = [];
        this.resultado = 0;
    }
    /*public obtenerCredito():number{
        }*/
    private repartir(): number {
        return Math.floor(Math.random() * 11 - 1) + 1;
    }
    public jugar(): void {
        let opcion = require('readline-sync');
        let repartir: number = 1;
        let pedirOtraCarta: number = 2;
        let salir: number = 0;
        let blackJack: number = 21;
        let as: number = 1;
        let asVariante: number = 11;
        if (repartir === 1) {
            repartir = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n' || '0 para salir' + '\n'));
            this.repartir();
            for (let i: number = 0; i < 2; i++) {
                if (this.resultado < blackJack) {
                    this.carta.push(this.repartir());
                    this.resultado += this.carta[i];
                    console.log('Primera mano ' + this.carta[i]);
                }
            }
            console.log('Total de la mano ' + this.resultado);
            pedirOtraCarta = Number(opcion.question('¿Desea pedir otra carta? Presione 2' + '\n'));
            if (pedirOtraCarta === 2) {
                for (let i: number = 0; i < blackJack; i++) {
                    if (this.resultado < blackJack) {
                    } else if (this.resultado === as) {
                        this.resultado -= as;
                        console.log(this.resultado);
                    } else if (this.resultado === asVariante) {
                        this.resultado += asVariante;
                    } else if (this.resultado === blackJack) {
                        console.log('Tiene un Black Jack', this.resultado)
                    } else {
                        console.log('Usted perdio', this.resultado);
                    }
                }
            }

        }
    }



}



