const monto = prompt('Ingrese monto total:')
const resto = 1 - (0.35+0.25+0.1+0.15)
const laMar = parseInt(monto)*0.35
const abancay = parseInt(monto)*0.25
const avjulio = parseInt(monto)*0.1
const aviacion = parseInt(monto)*0.15
const tacna = parseInt(monto)*(resto)
alert(`
    EJERCICIO N°2\n
    Monto ingresado: ${monto}\n
    Porcentaje para Av La Mar(35%): ${laMar}\n
    Porcentaje para Av Abancay(25%): ${abancay}\n
    Porcentaje para Av 28 de julio(10%): ${avjulio}\n
    Porcentaje para Av Aviacion(15%): ${aviacion}\n
    Porcentaje para Av Tacna(${resto}%): ${tacna}\n
`)