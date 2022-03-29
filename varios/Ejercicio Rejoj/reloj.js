//Se crearía un rejoj actualizado cada segundo
//Importante poner el temporizador en milisegundos

var temporizador = setTimeout("reloj()", 1000);


function reloj() {
	var tiempo = new Date();
	var hours = tiempo.getHours();
	var minutes = tiempo.getMinutes();
	var seconds = tiempo.getSeconds();
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	temporizador = setTimeout("reloj()", 1000);

	/*Esto se hace para añadir un 0 delante de la hora, minutos o segundos, cuando sólo
	hay un digito*/
	var str_hours = new String(hours);
	if (str_hours.length == 1) {
		document.getElementById("hours").innerHTML = "0" + str_hours;
	} 

	var str_minutes = new String(minutes);
	if (str_minutes.length == 1) {
		document.getElementById("minutes").innerHTML = "0" + str_minutes;
	} 

	var str_seconds = new String(seconds);
	if (str_seconds.length == 1) {
		document.getElementById("seconds").innerHTML = "0" + str_seconds;
	} 
	//Ejemplo de aviso mediante alert a una hora concreta
	if ( hours == 15 && minutes == 10 && seconds == 0) {
		alert("Hora de comenzar la tarea X");
	}
}

/*Función para detener el reloj con un botón (añadiendo la variable que inicia 
todo lo anterior)(temporizador*/
function stop() {
	clearTimeout(temporizador);
 }

 /*Esta función sería para volver a iniciar el reloj*/
 function play() {
 	temporizador = setTimeout("reloj()", 1000);
 }




















