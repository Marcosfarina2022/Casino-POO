"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var RLS = require("readline-sync");
var fs = require('fs');
var Dados = /** @class */ (function () {
    function Dados(pDado1) {
        this.dado = pDado1;
        this.resultado1 = 0;
        this.resultado2 = 0;
        this.apuestaInicial = 10000;
    }
    Dados.prototype.lanzarDados = function () {
        this.dado = Math.floor((Math.random()) * (6 - 1 + 1) + 1);
        return this.dado;
    };
    Dados.prototype.lanzarJugada = function () {
        var resultado;
        resultado = this.lanzarDados() + this.lanzarDados();
        return resultado;
    };
    Dados.prototype.jugarDados = function () {
        var apuesta = parseInt(RLS.question("--------Ingrese su apuesta------- \n"));
        if (apuesta > 5000) {
            var lanzar1 = RLS.question("----Ingrese una opción: --- 1 - Lanzar---- ||--- 2 - Desistir lanzamiento----- \n");
            switch (lanzar1) {
                case "1":
                    this.resultado1 = this.lanzarJugada();
                    console.log("El resultado del primer lanzamiento fue de", this.resultado1);
                    this.resultado2 = this.lanzarJugada();
                    console.log("El resultado del segundo lanzamiento fue de", this.resultado2);
                    if (this.resultado1 == this.resultado2) {
                        this.apuestaInicial = this.apuestaInicial * 2;
                        console.log("Felicitaciones!!!**** Ganó el premio Mayor ****** de $", this.apuestaInicial);
                    }
                    else {
                        console.log("******** Perdió el Juego ******");
                    }
                    break;
                case "2":
                    console.log("***!!! Muchas Gracias !!!*** por elegir Casino Las Vegas");
                    break;
            }
        }
        else {
            console.log("Su apuesta es insuficiente");
        }
    };
    Dados.prototype.crearArchivo = function (nombre, textoDados) {
        fs.writeFile(nombre, textoDados, function (error) {
            if (error)
                console.log("ERROR");
            else
                console.log("El archivo fue creado");
        });
    };
    Dados.prototype.leerArchivo = function (path) {
        fs.readFile(path, function (error, textoDados) {
            if (error)
                console.log("ERROR");
            else
                console.log(textoDados.toString());
        });
    };
    return Dados;
}());
exports.Dados = Dados;
