export class  Tragamonedas{
    protected valorApuesta:number;
    protected tematica:string;
    protected probabilidad:number;

    constructor(){
        
       
    }

     getValorApuesta():number{
        return this.valorApuesta;
    }

    getTematica():string{
        return this.tematica
    }

   
    

    protected dado():number{
        let dado = Math.random() * ((this.probabilidad + 1) - 1) + 1;
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
    

    jugar():string{
        
        let pantalla:number[] = this.pantalla();
        if(this.gano(pantalla)){
            return  "\n ================= \n"+
                    " || "+pantalla[0]+" || "+pantalla[1]+" || "+pantalla[2]+" || " +"\n"+
                    " ================= \n"+
                    "Gano $"+(this.valorApuesta*2);
        }else{
            return "\n ================= \n"+
                     " || "+pantalla[0]+" || "+pantalla[1]+" || "+pantalla[2]+" || " +"\n"+
                     " ================= \n"+
                    "Perdio";
        }
    }


}