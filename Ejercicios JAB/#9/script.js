/*Ayuda:
variable.toLowerCase() o vaiable.toUpperCase()
crear array vacío: let misReyes = [];
añadir valores al array: misReyes.push(variable);
buscar un elemento en un array: find , idexOf o some 
misReyes.some(valor=> valor=="Ervigio")
misReyes.indexOf("Ervigio") devuelve 0(o1,2,3,4) o -1 si no está
misReyes.splice("indice,número de valores a borrar a partir de ese índice") (sirve para borrar)

variable.substring(desde, hasta qué caracter) para elegir sólo algunos caracteres
ejemplo: variable.substring(0,1).toUpperCase();
*/

//https://www.html6.es/rey_nombre.png

window.onload = inicio;
//let reyesGodos = ["ervigio", "ataulfo", "atanagildo", "leovigildo", "recesvinto", "sisebuto", "teodorico"];
let misReyes = [];
let valorInput;
const url = "https://www.html6.es/img";



function inicio() {
	document.getElementById("boton").onclick = capturarInput;
	document.getElementById("input").onkeydown = teclado;//esta función hace que también pueda usarse la tecla enter
}


function capturarInput() {
	valorInput = document.getElementById("input").value.toLowerCase().trim();//trim sirve para quitar espacios inutiles de delante y detrás
	comprobarNombre(); //comprueba si existe en el array

}

function comprobarNombre() {
	if (misReyes.indexOf(valorInput) < 0) {
		añadirAlArray();
	} else {
		borrarInput();
	}	

	

}

function añadirAlArray() {
	misReyes.push(valorInput);
	let letraMayuscula = valorInput.substring(0,1).toUpperCase();//para convertirlo podría usarse una función convertidor y devolverlo con return y luego usar ese return dentro de ${convertidor(nombre)}
	let restoDelNombre = valorInput.substring(1);
	let nombreConMayuscula = letraMayuscula + restoDelNombre;
	borrarContenedorArray();
	misReyes.forEach(nombre => {
		document.getElementById("contenedorArray").insertAdjacentHTML
		("beforeend", `<div class= "foto">
			<img src= "${url}/rey_${nombre}.png"
			onerror = "errores(this)"</div>
			<div class="nombre">${convertidor(nombre)}</div>`)
		
		const ultimo = document.querySelectorAll(".foto").length-1;
		document.querySelectorAll(".foto")[ultimo].onclick = eliminar;
	});
	borrarInput();
	

}

function eliminar() {
	const texto = this.querySelector(".nombre").innerText.toLowerCase();// innerText coge el texto
	const buscar = misReyes.indexOf(texto);
	misReyes.splice(buscar,1);
	this.remove();
}

function errores(e) {
	e.src = `${url}/rey_.png`;
}

function borrarInput() {
	document.getElementById("input").value = "";
	document.getElementById("input").focus();

}

function teclado(e) {//puede usarse console.log(tecla) para que la consola nos diga cómo se llama la tecla que acabamos de pulsar
	const tecla = e.key;
	if(tecla == "Enter") {
		capturarInput();
	}

}

function borrarContenedorArray() {
	document.getElementById("contenedorArray").innerHTML = "";
}

function convertidor(n) {
	return n.substring(0,1).toUpperCase() + n.substring(1).toLowerCase()
}


