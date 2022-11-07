let readlineSync = require('readline-sync');

export class  Tragamonedas{
    public valorApuesta:number;
    protected tematica:string;
    protected probabilidad:number;
    protected valoresGanadores:number;
    protected valoresPosibles:number;
    protected columnas:number;
    public pozoAcumulado:number;
    
     

    constructor(){
        
        
        this.columnas = 3;
        
       
    }



    protected setProbabilidad():void{
        this.probabilidad = (this.valoresGanadores / this.valoresPosibles )*100;
    }

    private getValoresPosibles():number{
        return this.valoresPosibles;
    }

    protected setValorApuesta(valor:number):void{
        this.valorApuesta = valor;
    }


    public getValorApuesta():number{
        return this.valorApuesta;
    }

    getTematica():string{
        return this.tematica
    }

   
    

    protected dado():number{
        let dado = Math.random() * ((this.valoresGanadores + 1) - 1) + 1;
        return Math.floor(dado);
    }

    



    protected pantalla():number[]{
        let pantalla:number[] = new Array();
        for (let index = 0; index < 3; index++) {
            pantalla.push(this.dado());
            
        }

        return pantalla
    }

    protected gano(pantalla:number[]):boolean{
       if((pantalla[0]==pantalla[1] && pantalla[1]==pantalla[2]) ){
            return true;
            
       }else{
             return false
       }

    }
    
    getProbabilidad():number{
        return  this.probabilidad;
    }

    protected aumentarPozoAcumulado():void{
        this.pozoAcumulado = this.pozoAcumulado + this.getValorApuesta();
        
    }
    protected reiniciarPozoAcumulado():void{
        this.pozoAcumulado = this.getValorApuesta() *10;
        
    }

    jugar():string{
        console.log("\n\n");
        console.log("Apuesta $"+ this.getValorApuesta() );
        console.log("POZO ACUMULADO $"+this.pozoAcumulado);
        
        let pantalla:number[] = this.pantalla();
        if(this.gano(pantalla)){
            let gano:number= this.pozoAcumulado;
            this.reiniciarPozoAcumulado();
            return   "\n ================= \n"+
                    " || "+pantalla[0]+" || "+pantalla[1]+" || "+pantalla[2]+" || " +"\n"+
                    " ================= \n"+
                    "Gano $"+(gano)+"\n\n"+
                    "Ahora el Pozo se reinicio y es de $"+(this.pozoAcumulado)+"\n\n";
            

        }else{
            this.aumentarPozoAcumulado();
            return   "\n ================= \n"+
                     " || "+pantalla[0]+" || "+pantalla[1]+" || "+pantalla[2]+" || " +"\n"+
                     " ================= \n"+
                    "Perdio\n"+
                    "Ahora el Pozo Acumulado es de $"+(this.pozoAcumulado)+"\n\n";

                    
        }
    }

    


}