window.onload = inicio;

var urlDeLaMoneda="https://www.html6.es/img/moneda.png";
var monedas = 5;
var valorIntroducido;
var fallos = 0;
var aciertos = 0;

function inicio() {
	generarMonedas();
	document.querySelector(".boton").onclick = empezar;
}

function generarMonedas() {
	document.querySelector(".monedas").innerHTML = "";
	document.querySelector(".monedas").insertAdjacentHTML("beforeend", `<h1>Monedas: <span class="grande">${monedas}</span></h1>`);
	
	for(i=0;i<monedas;i++) {
		document.querySelector(".monedas").insertAdjacentHTML("beforeend", 
		`<img src="${urlDeLaMoneda}">`);
	}

	
}

function empezar() {//Lo ideal sería crear funciones más pequeñas
	valorIntroducido = document.getElementById("campo").value;
	document.querySelector(".informacion").innerHTML = "";
	fallos = 0;
	aciertos = 0;

	if(valorIntroducido > 1 && valorIntroducido < 10) {
		document.querySelector(".contenido").innerHTML = "";
		//bucle creador de divs
		for(x=0;x<valorIntroducido;x++) {
			crearDivs();
		}

		//bucle comprobador de fallos
		for(x=0; x<valorIntroducido;x++) {
			if(document.querySelectorAll(".cuadro")[x].innerHTML != valorIntroducido) { //si NO hay acierto
				fallos ++;
				
			} else { //si hay acierto
				aciertos ++;
				document.querySelectorAll(".cuadro")[x].setAttribute("class","verde cuadro");
				
			}
		}

		//Descontador de monedas si fallo = 100%
		if (aciertos == 0) {
			monedas -= valorIntroducido;
			generarMonedas();
			document.querySelector(".informacion").innerHTML = `No se ha producido ninguna coincidencia y has perdido ${valorIntroducido} monedas`;

		} else if (aciertos == 1) {
			document.querySelector(".informacion").innerHTML = `Se ha producido ${aciertos} coincidencia y has ganado ${aciertos} moneda`;
		}  else if (aciertos > 1) {
			document.querySelector(".informacion").innerHTML = `Se han producido ${aciertos} coincidencias y has ganado ${aciertos} monedas`;
		} 
		monedas += aciertos;
		generarMonedas();



	} else {
		document.getElementById("campo").value = "";
		document.getElementById("campo").focus();
	}

}

function crearDivs() {
	 let numeroRandom = Math.ceil(Math.random()*valorIntroducido);//floor para que empiece a contar a partir de 0 y ceil a partir de uno (así no habría que sumarle 1 al final)
	document.querySelector(".contenido").insertAdjacentHTML("beforeend", `<div class="cuadro rojo">${numeroRandom}</div>`);
}

