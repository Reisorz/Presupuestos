console.log("Presupuestos");

let arrayIngresos = [];
let arrayGastos = [];

function restablecerValores (){
    document.getElementById("descripcionMovimiento").value = "";
    document.getElementById("dineroMovimiento").value = "";
}

function mostrarMovimientos(){
    console.log("Funcion mostrarMovimientos");
    const columnasMovimientos = document.getElementsByClassName("movimientosIngresos");
    columnasMovimientos[0].innerHTML = "";
    columnasMovimientos[1].innerHTML = "";


    for (let ingresos of arrayIngresos){
        columnasMovimientos[0].innerHTML += '<div class="filaIngreso"><div>' + ingresos.descripcion + '</div><div id="dineroYBoton"><div class="dineroIngreso">+ ' + ingresos.valor + '€</div><img class="botonBorrar" onclick="borrarIngreso.call(this)" src="./img/borrar.png" id="' + ingresos.id + '"></div></div>';
    }

    for (let gastos of arrayGastos){
        columnasMovimientos[1].innerHTML += '<div class="filaIngreso"><div>' + gastos.descripcion + '</div><div id="dineroYBoton"><div class="dineroGasto">- ' + gastos.valor + '€</div><img class="botonBorrar" onclick="borrarGasto.call(this)" src="./img/borrar.png" id="' + gastos.id + '"></div></div>';
    }

}

function sumarIngresos() {
    
    let totalIngresos = 0; 
    for (let ingresos of arrayIngresos){
        totalIngresos += ingresos.valor;
        
    } 
    document.getElementById("ingresosTotal").innerHTML = totalIngresos + "€";
    
}

function sumarGastos() {

    let totalGastos = 0; 
    for (let gastos of arrayGastos){
        totalGastos += gastos.valor;
        
    }
    document.getElementById("gastosTotal").innerHTML = totalGastos + "€";
    
}

function balanceTotal (){

    let totalGastos = 0; 
    for (let gastos of arrayGastos){
        totalGastos += gastos.valor;
        
    }
    let totalIngresos = 0; 
    for (let ingresos of arrayIngresos){
        totalIngresos += ingresos.valor;
        
    } 
    let balanceTotal = 0;
    balanceTotal = totalIngresos - totalGastos;
    document.getElementById("cantidadPresupuesto").innerHTML = balanceTotal + "€";

}


function introducirMovimiento () {
    console.log("Funcion introducirMovimiento");
    let signoSelect = document.getElementById("signo");
    let signo = signoSelect.options[signoSelect.selectedIndex].value;
    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valor = document.getElementById("dineroMovimiento").value;
    console.log(signo);

    if(descripcion == "" || valor == "" || isNaN(valor)){
        document.getElementById("mensajeError").innerHTML = "Introducir valores correctos";
        setTimeout(() => document.getElementById("mensajeError").innerHTML = "", 4000);
    }
    else if( signo == "positivo"){
    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valorString = document.getElementById("dineroMovimiento").value;
    let valor = parseFloat(valorString);

    let movimiento = new Ingreso (descripcion, valor);
    arrayIngresos.push(movimiento);

    sumarIngresos();
    balanceTotal();
    mostrarMovimientos();
    restablecerValores();

    console.log(arrayIngresos);
    }
    else if( signo == "negativo"){

    let descripcion = document.getElementById("descripcionMovimiento").value;
    let valorString = document.getElementById("dineroMovimiento").value;
    let valor = parseFloat(valorString);

    let movimiento = new Gasto (descripcion, valor);
    arrayGastos.push(movimiento);

    sumarGastos();
    balanceTotal();
    mostrarMovimientos();
    restablecerValores();

    console.log(arrayGastos);
        
    } 
}

function borrarIngreso() {
    let boton = this;
    let botonID = boton.id;

    let posicion = arrayIngresos.findIndex(ingreso => ingreso.id == botonID);
    arrayIngresos.splice(posicion,1); 


    sumarIngresos();
    balanceTotal();
    mostrarMovimientos();
}

function borrarGasto() {
    let boton = this;
    let botonID = boton.id;

    let posicion = arrayGastos.findIndex(gasto => gasto.id == botonID);
    arrayGastos.splice(posicion,1); 


    sumarGastos();
    balanceTotal();
    mostrarMovimientos();
}

document.getElementById("tickAdd").addEventListener("click", introducirMovimiento);