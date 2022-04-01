/*Algunas notas de ayuda:
	document.querySelector("#cosa").style.color = "red";
	document.querySelectorAll("#cosa")[0].style.color = "red";
	document.getElementsById("cosa").style.color = "red";
	document.getElementsByClassName("cosa")[0].style.color = "red";

Para dejar las propiedades iniciales hay que poner el valor "null";
*/

var estadoImagen = true;//se usará para saber si la imagen está visible o no

//Así se crean los botones y la imagen con Javascript
//También puede hacerse con insertAdjacentHYML("beforeend") y luego pegar todo el codigo
window.onload = function() {
	document.getElementById("contenedorBotones").innerHTML = `<button value="" class="boton" type="button" id="variador" onclick="variar()">Variador</button>` + `<button value="" class="boton" type="button" id="ocultador" onclick="ocultar()">Ocultador</button>` + `<button value="" class="boton" type="button" id="reset" onclick="resetear()">Reset</button>`;
	document.getElementById("contenedorImagen").innerHTML = `<img src="imagen.png" id="imagen">`	

}


//función del primer botón
function variar() {
	document.getElementById("imagen").style.border="3px solid black";
	document.getElementById("imagen").style.background="blue";
	document.getElementById("imagen").style.borderRadius="10px";
	document.getElementById("imagen").style.transform="rotate(5deg)";
	document.getElementById("variador").style.visibility="hidden";
	//es mejor usar vivibility="hidden" en vez de display="none"

}


//función del segundo botón
function ocultar() {
	if (estadoImagen == true) {
	document.getElementById("imagen").style.display="none";
	estadoImagen = false;
	} else {
		document.getElementById("imagen").style.display="block";
		estadoImagen = true;
	}
}


//función del tercer botón
function resetear() {
	document.getElementById("variador").value="null";
	document.getElementById("variador").style.visibility="visible";
	document.getElementById("contenedorImagen").innerHTML = `<img src="imagen.png" id="imagen">`

}