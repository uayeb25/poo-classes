import {Celular} from "./Celular"
class Intern{

    id: string;
    name: string;
    fecha_practica: Date;
    mi_celular: Celular;

    constructor(id: string, name:string, fecha_pract: Date, mi_cel: Celular){
        this.id = id;
        this.name = name;
        this.mi_celular = mi_cel;
        this.fecha_practica = fecha_pract;
    }

}

export {Intern}