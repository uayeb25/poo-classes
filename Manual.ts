class Manual{

    dependencias: {[id: string]: string;}

    constructor(){

        this.dependencias = {
            "A":"",
            "B":"A",
            "C":"B",
            "D":"C"
        }

    }


}

export {Manual}