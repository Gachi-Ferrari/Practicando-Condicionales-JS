//1- Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

/*let meses= prompt ("¿Cual es el mes que quieres averiguar?")

const obtenerDiasMes = function (mes) {
    
    if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
        console.log("tiene 31 días.")
    } else if (mes === "febrero") {
        console.log("tiene 28 días.")
    } else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
        console.log("tiene 30 días.")
    } else {
        console.log("no es un mes")
    }
}
obtenerDiasMes(meses)*/

/*2- Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

let number = prompt ("Ingrese aquí su número para saber si es positivo")
const esPositivoONegativo = function (){
    if (number >= 0){
        console.log("Tu número es positivo.")
    } else if (number <0){
        console.log("Tu número es negativo.")
    } else{
        console.log ("No ingresaste un número.")
    } 
}
esPositivoONegativo (number)*/


/*3- Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

let numero = prompt ("Ingrese un número para saber si es par o impar")

const esParOImpar = function (parOImpar) {
    if (numero % 2 === 0){
        console.log("Tu número es par.")
    }else if (numero % 2 === 1){
        console.log("Tu número es impar.")
    }else{
        console.log("No ingresaste un número.")
    }
}
esParOImpar(numero)*/

//4-Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

let asistencia = prompt ("Ingrese su porcentaje de asistencia, sin escribir el símbolo.")
let materiasAprobadas = prompt ("Ingresar aquí el número de materias que tiene aprobadas.")
let tesis = prompt ("¿Usted ha aprobado ya su tesis?")
const puedeGraduarse = function (evaluacion){
    if (asistencia >= 75 && materiasAprobadas >= 50 && tesis === "si"){
        console.log (`Ud. tiene un ${asistencia}% de asistencia; tiene ${materiasAprobadas} materias aprobadas y ${tesis} ha aprobado su tesis. Felicitaciones puede graduarse!!`)
    }else {
        console.log (`Ud. tiene un ${asistencia}% de asistencia; tiene ${materiasAprobadas} materias aprobadas y ${tesis} ha aprobado su tesis. Lo sentimos pero no cumple con los requisitos para graduarse.`)
    }
}
puedeGraduarse(asistencia, materiasAprobadas, tesis)

