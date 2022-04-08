// Math.random() --> Nos devuelve un número entre 0 y 0.99999999
// Math.random() * 4 --> Nos vevuelve: 0.237594837576, 1.5757456, 2.845734, 3.89547
// Math.floor(Math.random() * 4) --> Devuelve 0, 1, 2 o 3 (elimina la parte decimal)
//let azar = Math.floor(Math.random() * 4); --> variable random 0-3 (cuatro posibilidades)

/*Captura de una tecla: document.querySelector("#input3").onkeydown = function; (al pulsar cualquier tecla*/

/* if (e.key=="Enter") {
......
}
Ocurre cuando se pulsa Enter*/




/*Otra forma de hacer el inicio:

windoe.onload=inicio;
function inicio() {
	preguntar();
	document.getElementById("botonComprobar").onclick=comprobar;
 }

 function preguntar() {
	let a = Math.floor(Math.random()*10);
	let b = Math.floor(Math.random()*10);
	document.getElementById("input1").value = random1;
	document.getElementById("input2").value = random2;
	document.getElementById("input3").value = "";
	document.getElementById("input3").focus();
 }
	*/


var random1;
var random2;
var suma;

window.onload = function() {

	document.getElementById("operacion").insertAdjacentHTML("beforeend",
		`<input id="input1" type="number" readonly> + </input>
		 <input id="input2" type="number" readonly> = </input>
		 <input id="input3" type="number"></input>
		 <button type="button" id="botonComprobar" onclick="comprobar()">Comprobar</button>
		`)
	//El readonly del input1 e input2, sirve para que el usuario no pueda escribir
	
	document.getElementById("input3").onkeydown=teclado;//La función teclado sirve para poder pulsar Enter para validar

	function teclado(e) {
		let tecla = e.key;
		if (tecla == "Enter") {
			comprobar();
		}

	}

	random1 = Math.floor(Math.random()*10);
	random2 = Math.floor(Math.random()*10);
	suma = random1 + random2;

	document.getElementById("input1").value = random1;
	document.getElementById("input2").value = random2;
	document.getElementById("input3").focus();//Esto pone mete el cursor en el input3


	
}


function comprobar() {
	

	let respuesta = document.getElementById("input3").value;
	if (respuesta == suma) {
		document.getElementById("texto").innerHTML += `<p style="color:green">Es correcto, el resultado de ${random1} + ${random2} es ${suma} </p><br>`;
		
	} else {
		document.getElementById("texto").innerHTML += `<p style="color:red">No es correcto, el resultado de ${random1} + ${random2} es ${suma} </p><br>`;
		
	}

	random1 = Math.floor(Math.random()*10);
	random2 = Math.floor(Math.random()*10);
	suma = random1 + random2;

	document.getElementById("input1").value = random1;
	document.getElementById("input2").value = random2;
	document.getElementById("input3").value = "";
	document.getElementById("input3").focus();

	


	
}

