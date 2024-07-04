let IngresosTotales=0
let IngresosTotalesDolares=0
let Ingresos=0
let HorasTotales=0
let SaldoHoras=0
const horasporcliente = 40
//let dedicacion=true - Para seleccionar part time o full time
//let DivisorDedicacion=0 - coeficiente para horas disponibles de acuerdo a la dedicacion
const valorDolar=954
//en la nueva version se actualizara a traves de api del bcra
const horasAlMes =240
let valorHora=0


function ValorPorCliente (ParametroHorasporCliente, ParametroValorHora) {
     Ingresos=ParametroHorasporCliente*ParametroValorHora
}
function CantidadHorasTotales (ParametroCantidadClientes, ParametroHorasporCliente) {
    HorasTotales=ParametroCantidadClientes*ParametroHorasporCliente
}

function CantidadHorasDisponibles (ParametroHorasTotales, ParametroHorasporCliente) {
    SaldoHoras=ParametroHorasTotales-ParametroHorasporCliente
}

function conversionDolar (ParametroPesos, ParametroCotizacion ){
    IngresosTotalesDolares=ParametroPesos/ParametroCotizacion
}

let Servicio=parseInt(prompt ("Bienvienido al Simulador por favor selecciona tu profesion \n 1=Desarrollo \n 2=Consultoria Funcional \n 3=Project Manager"))

if (Servicio<4 && Servicio>0){
switch (Servicio) {
case 1:  valorHora=45000
break
case 2:  valorHora=35000
break
case 3: valorHora=37500
break
default:
alert("Opcion incorrecta")
}console.log('Tu valor de hora es: '+ valorHora);
let cantidadClientes=parseInt(prompt ("¿Cuántos clientes podrías conseguir? Podes tener cómo máximo 6 porque cada cliente consume 40 horas."))

if (cantidadClientes>6 || cantidadClientes<0){
    alert ('Elección incorrecta cantidad de clientes')
    console.warn ('Elección incorrecta cantidad de clientes')
}
else 
{
    console.log('Felicitaciones, elegiste: '+cantidadClientes+' clientes')
    console.log('Te recordamos que cada cliente te demanda: '+horasporcliente+' horas')
    ValorPorCliente(horasporcliente, valorHora);
    console.log ('La facturación por cliente es de: $'+Ingresos)

    CantidadHorasTotales(cantidadClientes, horasporcliente)
    console.log('Lograste una dedicacion de '+HorasTotales+' horas')

    CantidadHorasDisponibles(horasAlMes, HorasTotales)
    console.log('Te quedaron '+SaldoHoras+' horas para sumar mas clientes')

    let i=1
    while (i<=cantidadClientes){
        IngresosTotales=IngresosTotales+Ingresos,
        i++
    }

    conversionDolar(IngresosTotales, valorDolar)
    console.log ('Felicitaciones tu ingreso total en pesos es de: $'+IngresosTotales+' y la conversión en dolares es de: U$S'+IngresosTotalesDolares)
}

}

else{    
    console.warn ('Elección incorrecta de especializacion')
    alert ('Elección incorrecta de especializacion')
}


