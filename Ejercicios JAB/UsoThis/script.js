//Uso del This para tener una sola función y un sólo onclick

/*  Esta sería una manera muy poco óptima y tediosa de hacer este ejercicio

window.onload = inicio;

function inicio() {
	document.querySelector("#caja").insertAdjacentHTML("beforeend",
		`<div class="cuadro">1</div>
		 <div class="cuadro">2</div>
		 <div class="cuadro">3</div>
		 <div class="cuadro">4</div>
		 <div class="cuadro">5</div>
		 <div class="cuadro">6</div>`);

	document.querySelectorAll(".cuadro")[0].onclick = colorear1;
	document.querySelectorAll(".cuadro")[1].onclick = colorear2;
	document.querySelectorAll(".cuadro")[2].onclick = colorear3;
	document.querySelectorAll(".cuadro")[3].onclick = colorear4;
	document.querySelectorAll(".cuadro")[4].onclick = colorear5;
}

function colorear1() {
	document.querySelectorAll(".cuadro")[0].style.backgroundColor = "red";
	document.querySelectorAll(".cuadro")[0].style.color = "white";
}
function colorear2() {
	document.querySelectorAll(".cuadro")[1].style.backgroundColor = "red";
	document.querySelectorAll(".cuadro")[1].style.color = "white";
}
function colorear3() {
	document.querySelectorAll(".cuadro")[2].style.backgroundColor = "red";
	document.querySelectorAll(".cuadro")[2].style.color = "white";
}
*/

window.onload = inicio;

function inicio() {
	for(let x = 1; x <= 49; x++) { //Este for creará y numerará 49 cuadros
		document.querySelector("#caja").insertAdjacentHTML("beforeend", `<div class="cuadro">${x}</div>`);
	}

	for(let k = 0; k < 49; k++) { //Este onclick actuará llamará a la función colorear con los 49 cuadros
		document.querySelectorAll(".cuadro")[k].onclick = colorear;
	}
}

function colorear() {
	if(this.style.color!="white") {
		this.style.backgroundColor = "red";
		this.style.color = "white";

		let numero = this.innerHTML;
		document.querySelector("#caja2").insertAdjacentHTML("beforeend",
			`<div class="cuadro">${numero}</div>`);


	} else {
		this.style = null; //Esto anula las propiedades otorgadas por JavaScript y deja las del css
	}
	//this es el elemento sobre el que se hace click
}