/*var nombre= "elver "
var apellido = "gon"
var asegundo = "mestorba"
alert("Hola "+ nombre+" "+apellido+" "+asegundo)
console.log("hola subi correctamente un cambio")
var persona =
{
Nombre: "cmr",
Apellido: "elme",
cedula: "112173907",
edad: 20
}
if (persona.edad>=18)
 {
 	alert (persona.Nombre+" es mayor de edad y tiene "+ persona.edad )
 }
 else
 {
 	alert (persona.Nombre+" es ilegal perro "+ persona.edad )
 }*/
 var arreglopc=
 [
 {
 	marca: "acer",
 	modelo: "predator",
 	anno: 2018,
 	ref:1670
 },
 {

 	marca: "asus",
 	modelo: "smart",
 	anno: 2016,
 	ref:4532
 },
 {

 	marca: "hp",
 	modelo: "gaming",
 	anno: 2019,
 	ref:16700
 }
 
 ]
 for (var i = 0; i < arreglopc.length; i++) 
 {
 	alert(arreglopc[i].marca+" "+arreglopc[i].modelo)
 	if (arreglopc[i].anno < 2017 )
 	{
 		alert(" el pc ya no mueve lol")
 	} 
 	else
 	{
 		alert("tiene una buena mecha")
 	}
 }