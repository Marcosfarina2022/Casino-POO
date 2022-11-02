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
console.log("***************************** !!!!BIENVENIDOS AL CASINO LAS VEGAS!!!! ****************************");
console.log(require('yeoman-character'));

let casino:Casino = new Casino();


casino.ingresar();



