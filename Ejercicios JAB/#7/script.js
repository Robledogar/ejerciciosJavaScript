/*for (i=0; i<5; i++) {

}*/

/*Para saber cuantos elementos existen en pantalla: length
ejemplo: document.querySelectorAll("img").length;

*/

/*getAttribute y setAttribute
document.querySelector("img").setAttribute("atributo", "nuevo valor"); (ejemplos de atributo: src, id, class)
*/

window.onload = inicio;
let rojo = "https://www.html6.es/img/rojo.png";
let azul = "https://www.html6.es/img/azul.png";
let contadorDeImg = 0;

function inicio() {
	document.getElementById("boton1").onclick = añadir1Rojo;
	document.getElementById("boton2").onclick = añadir4Azules;
	document.getElementById("boton3").onclick = modificarAzules;
	document.getElementById("boton4").onclick = eliminarRojos;
	document.getElementById("boton5").onclick = vaciar;
}



function añadir1Rojo() {
	document.getElementById("caja").insertAdjacentHTML("beforeend",`<img class="rojo" src=${rojo}>`);
}


function añadir4Azules() {
	for(let k = 0; k < 4; k++) {
	document.getElementById("caja").insertAdjacentHTML("beforeend", `<img class="azul" src=${azul}>`);
	}
}


function modificarAzules() {
	let contadorAzules = document.querySelectorAll(".azul").length;
	
	 for(let i =contadorAzules-1;i>=0;i--) {//Muy importante poner en contador en sentido inverso
	 	document.querySelectorAll(".azul")[i].src = rojo;
	 	document.querySelectorAll(".azul")[i].setAttribute("class","rojo");

	 }
	 
	 
}


function eliminarRojos() {
	let contadorRojos = document.querySelectorAll(".rojo").length;
	for(let i=contadorRojos-1; i>= 0;i--) {
		document.querySelectorAll(".rojo")[i].remove();
		
	}

}


function vaciar() {
	location.reload();
}