class Ingreso {

    static contadorIngresos = 0;

    constructor (descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Ingreso.contadorIngresos;
    }

    get id(){
        return this._id;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}

class Gasto {

    static contadorGastos = 0;

    constructor (descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Gasto.contadorGastos;
    }

    get id(){
        return this._id;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}