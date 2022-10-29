"use strict";
exports.__esModule = true;
var RuedaDeLaFortuna_1 = require("./RuedaDeLaFortuna");
var Cliente_1 = require("./Cliente");
var cliente = new Cliente_1.Cliente("Marcos", 23654789);
var juego1 = new RuedaDeLaFortuna_1.RuedaDeLaFortuna(2000, cliente, 100);
juego1.elegirJuego();
