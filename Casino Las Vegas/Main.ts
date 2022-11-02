import { Casino } from "./casino";
var figlet = require('figlet');


figlet('CASINO LAS VEGAS!!!!!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

let casino:Casino = new Casino();


casino.ingresar();



