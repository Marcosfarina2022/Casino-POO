import { Casino } from "./Casino";
import { TragaMonedas } from "./TragaMonedas";
import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { readlinkSync } from "fs";
import * as RLS from "readline-sync";
import { RuedaDeLaFortuna } from "./RuedaDeLaFortuna";
import { Cliente } from "./Cliente";
let cliente: Cliente = new Cliente ("Marcos",23654789);
let juego1:TragaMonedas = new RuedaDeLaFortuna(2000,cliente,100)

juego1.elegirJuego();




