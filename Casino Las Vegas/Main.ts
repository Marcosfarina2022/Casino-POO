import { Casino } from "./casino";
var figlet = require('figlet');


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
console.log(nuevotexto.leerArchivo('Casino.txt'));

casino.ingresar();



