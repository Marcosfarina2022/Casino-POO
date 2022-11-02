"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var figlet = require('figlet');
var casino = new casino_1.Casino();
var figlet = require('figlet');
figlet('CASINO LAS VEGAS!!!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
casino.ingresar();
