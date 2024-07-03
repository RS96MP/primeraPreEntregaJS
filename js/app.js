//! Funcion de kWh a pesos
function luzAPesos(luz, pesosLuz){
    return luz * pesosLuz;
}


//! Funcion de m3 a pesos
function gasAPesos(gas, pesosGas){
    return gas * pesosGas;
}

//! Funcion numero decimal
function numeroDecimal(numero){
    return numero.toLocaleString('es-AR' ,{ minimunFractionDigits: 2 , maximunFractionDigits: 2});
}

//!Funcion de convertir
function convertir(){
    let pesosLuz = 67.82;
    let pesosGas = 59.24;

    let conversor = prompt('¿Querés saber cuanto de luz o gas estas consumiendo? \n Ingrese opción 1 para LUZ \n Ingrese opción 2 para GAS');
    if (conversor === '1'){
        let luz = parseFloat(prompt('Ingrese la cantidad de kWh que figura en su factura:'))
        if (isNaN(luz) || luz <= 0 ){
            alert('Por favor ingrese un valor correcto');
        }
        let totalLuz = luzAPesos(luz, pesosLuz);
        alert(`Su monto a abonar de ${luz}kWh son $ ${numeroDecimal(totalLuz)}`);
    }else if (conversor === '2'){
        let gas = parseFloat(prompt('Ingrese la cantidad de m3 que figura en su factura:'))
        if (isNaN(gas) || gas <= 0 ){
            alert('Por favor ingrese un valor correcto');
        }
        let totalGas = gasAPesos(gas, pesosGas);
        alert(`Su monto a abonar de ${gas}m3 son $ ${numeroDecimal(totalGas)} `)
    }else{
        alert('¡Opción no válida! \n Por favor ingrese la opción correcta')
    }
    }

    convertir();