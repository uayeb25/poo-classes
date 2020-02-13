import {Celular} from "./Celular"
import {Intern} from "./Intern"

let mi_celular = new Celular("CEL01","DDYU");
mi_celular.fasesrealizadas["A"] = new Date();

let mi_intern_1 = new Intern("1000","PEDRO", new Date(), mi_celular);


console.log(mi_intern_1);