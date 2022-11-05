import { Casino } from "./casino";
var figlet = require('figlet');
var colores = require('colors');

figlet(' Gracias!!! \n\n Casino Las Vegas!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
let casino:Casino = new Casino();
let nuevotexto: Casino = new Casino();
console.log(colores.brightGreen(nuevotexto.leerArchivo('Casino.txt')));

casino.ingresar();



