//para llamar a la función "inicio" al cargar el contenido
window.onload = inicio;




function inicio() {
	//De esta forma le añadimos el onclick a los botones para que puedan llamar a su función correspondiente
	document.getElementById("boton1").onclick = escribe;
	document.getElementById("boton2").onclick = creaImagen;
	document.getElementById("boton3").onclick = añadirUnBoton;
	document.getElementById("boton4").onclick = borrarTodo;
}

//Escribe "Hola Mundo" en el contenedor
function escribe() {
	borrarTodo();
	document.getElementById("texto").innerHTML = "Hola Mundo";
}

//Crea una imagen en el contenedor
function creaImagen() {
	borrarTodo();
	document.getElementById("imagen").innerHTML = `<img src="mano.png">`;
}

//Añade un botón "Extra" cada vez que se llama a la función
function añadirUnBoton () {
		
		document.getElementById("botonAñadido").innerHTML +=`<button class= "boton">Extra</button>`;	
}

//Borra todo en contenido del contenedor
function borrarTodo() {
	document.getElementById("texto").innerHTML = "";
	document.getElementById("imagen").innerHTML = "";
	document.getElementById("botonAñadido").innerHTML = "";
}