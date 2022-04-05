/*Usaremos  .value() , .substr(0, 1) , .substring()--> (extraen texto de una cadena de texto)
let trozo = variable.substr(2,2); (empieza tomando el caracter correspondiente al 2 y mete 2 en total)
document.querySelector("#caja").innerHTML = "texto";
let valor = document.querySelector("__").value();

.toLowerCase() y to UpperCase() --> convierten en mayusculas

*/

window.onload = inicio;
const miNombre = "JOSE";

	
function inicio() {
	document.getElementById("contenedor").innerHTML = `<input id="input"></input>` + `<button type="button" id="boton" onclick="guardarNombre()">Botón</button>`;
	document.getElementById("contenedorSecundario").innerHTML =`<div id="saludo"></div`;
	
	//Esta sería otra forma de hacerlo:
	/*document.querySelector("body").insertAdjacentHTML("beforend",
		`<input id="input"></input>`
		`<button type="button" id="boton" onclick="guardarNombre()">Botón</button>`
		`<div id="saludo"></div`);*/
}

function guardarNombre() {
	
	var nombre = document.getElementById("input").value;
	var nombreMayusculas = nombre.toUpperCase();
	var nombreFormateado = nombre.substr(0,1).toUpperCase() + nombre.substr(1).toLowerCase();
	//Poner sólo un valor en el substr hace que incluya hasta el final


	if (miNombre == nombreMayusculas) {
		document.getElementById("saludo").innerHTML = `Hola ${nombreFormateado} <button id="botonWeb">Ir a la web</button>`;
		document.getElementById("botonWeb").onclick=accederWeb;
		//Esta última linea llama a la futura función "accederWeb"


	} else {
		document.getElementById("input").value = "";
		document.getElementById("saludo").innerHTML = "";
		document.getElementById("input").focus();
	}

}

function accederWeb() {
	location.href="https://www.youtube.com/watch?v=Y5VDZrUMCC4&list=PLRM7PpbqqStK55TlSFBreCHRYqVXtomYs&index=4";
}



