/*function escribir() {
	document.write("Hola" + "<br>");
}
var temporizador = setInterval("escribir()", 1000);*/

/*var numeroTemporizador = setInterval("temporizar()", 5000);

function temporizar() {
	 document.getElementById("contenedorTitulo").insertAdjacentHTML("beforeend",`<h2>30:00</h2>`);*/


	 

	 var tiempoTotal;
	 var porcentajeBarra;
	 var tiempoInicial;

	 window.onload = function() {
	 	document.getElementById("contenedorBoton").innerHTML = `<button id="boton" onclick="iniciar()">Iniciar</button>`
	 }
	 
	

	 function iniciar() {

	 	
	 	document.getElementById("contenedorBoton").innerHTML = `<button id="boton">Iniciar</button>`
	 	tiempoTotal = document.getElementById("input").value;
	 	var resto = tiempoTotal % 1;

	 	if (tiempoTotal > 0 && resto == 0) {
	 		document.getElementById("contenedorBarra").innerHTML = `<div id="barra" style="height:${porcentajeBarra}%"></div>`
	 		tiempoInicial = tiempoTotal;
	 		if (tiempoTotal != 0) {
	 			porcentajeBarra = 100;
	 		}
	 		actualizarTiempo();

	 	} else {
	 		document.getElementById("contenedorBoton").insertAdjacentHTML("beforeend", `<h3>El número introducido no es valido.</h3> <h3>Introduzca un entero mayor de 0.</h3>`);
	 	}
	 	
	 	
	 	
	 	
	 }


	 function actualizarTiempo() {
	 	document.getElementById("tiempo").innerHTML = tiempoTotal;
	 

	 	if(tiempoTotal == 0) {
	 		document.getElementById("contenedorBarra").innerHTML = `<div id="barra" style="height:0%"></div>`;
	 		document.getElementById("contenedorBoton").innerHTML = `<button id="boton" onclick="iniciar()">Iniciar</button>`;
	 	} else {
	 		tiempoTotal -= 1;
	 		setTimeout("actualizarTiempo()", 1000);
	 		document.getElementById("contenedorBarra").innerHTML = `<div id="barra" style="height:${porcentajeBarra}%"></div>`;
	 		porcentajeBarra -=100/tiempoInicial;
	 	}

	 }