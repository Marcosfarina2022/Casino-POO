"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var casino = new casino_1.Casino();
casino.texto();
casino.crearArchivo("casinoPrueba.txt", "hola");
casino.ingresar();
