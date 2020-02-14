import {Celular} from "./Celular"
import {Manual} from "./Manual"

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

    asignarFase(fase:string, manual: Manual): Celular{
        let la_dependencia_que_ocupo: string = manual.dependencias[fase];
        if( la_dependencia_que_ocupo != undefined ){
            
            if( la_dependencia_que_ocupo == "" ){
                this.mi_celular.fasesrealizadas[fase] = new Date();
            }else if( this.mi_celular.fasesrealizadas[la_dependencia_que_ocupo] != undefined ){
                this.mi_celular.fasesrealizadas[fase] = new Date();
            }else{
                console.log("COMPLETE LA FASE "+la_dependencia_que_ocupo+" ANTES DE INSERTAR "+fase)
            }

        }else{
            console.log("SU FASE NO EXISTE!")
        }
        return this.mi_celular;
    }

}

export {Intern}