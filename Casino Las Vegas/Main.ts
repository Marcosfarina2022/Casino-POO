import { Casino } from "./casino";

let casino:Casino = new Casino();

casino.ingresar();

let dados:Dados= new Dados(1);
let textoDados:string="Bienvenido, usted eligió el juego de Dados"
dados.crearArchivo("dados.txt",textoDados);
dados.leerArchivo("dados.txt");
dados.jugarDados();