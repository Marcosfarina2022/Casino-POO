"use strict";
exports.__esModule = true;
var Casino_1 = require("./Casino");
var figlet = require('figlet');
var colores = require('colors');
figlet(' Gracias!!! \n\n Casino Las Vegas!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
var casino = new Casino_1.Casino();
console.log(colores.brightGreen(casino.leerArchivo('Casino.txt')));
casino.ingresar();
