"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var figlet = require('figlet');
figlet(' Gracias!!! \n\n Casino Las Vegas!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
var casino = new casino_1.Casino();
var nuevotexto = new casino_1.Casino();
console.log(nuevotexto.leerArchivo('Casino.txt'));
casino.ingresar();
