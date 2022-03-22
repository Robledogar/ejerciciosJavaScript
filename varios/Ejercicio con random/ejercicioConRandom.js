window.onload = inicio;

var imagenes = ["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png"];
var cantidad = imagenes.length;
var orden = [];


function inicio() {
	document.getElementById("boton1").onclick = mas;
	document.getElementById("boton2").onclick = mostrar_todo;
}

function mas() {
	if (orden.length == imagenes.length) {
		orden = [];
		document.getElementById("caja").innerHTML = "";
		document.getElementById("boton2").disabled = true;
	}
	do {
		r = Math.floor(Math.random()* cantidad);
	} while (orden.indexOf(r) >=0)
	
	orden.push(r);
	document.getElementById("caja").innerHTML +=`<div><img src="${imagenes[r]}"></img></div>`;

	if (orden.length == imagenes.length) {
		document.getElementById("boton2").disabled = false;
	}
	
}

// el botón mostrar todo sirve para invertir el orden de las imágenes (tiene un array dentro de otro)
function mostrar_todo() {
	document.getElementById("caja").innerHTML ="";
	for (let k = imagenes.length -1; k >= 0; k--) {
		document.getElementById("caja").innerHTML += `<div><img src= "${imagenes[orden[k]]}"></div>`;
		// "Orden", sólo contiene posiciones del array "imagenes"
		
	}

}