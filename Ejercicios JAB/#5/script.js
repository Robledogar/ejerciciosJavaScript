/*Pistas:
rotar un elemento: .style.transform(rotate:90deg)(en este caso iría al 90)*/




window.onload = inicio;
var grados = 0;
var invertir = 0;//recoge el sentido al que debe girar (es una variable de apoyo)

function inicio() {
	document.querySelector(".boton1").onclick = girar;
	actualizar();

}

function girar() {

	if (invertir == 0) {
		grados += 20;
		rotar();
		actualizar();
	} else {
		grados -= 20;
		rotar();
		actualizar();
	}

	if (grados == 360) {
		invertir = 1;
		actualizar();
	} 

	if (grados == 0) {
		invertir = 0;
		
	}

	



}

function rotar() {
	document.querySelector(".flecha").style.transform =`rotate(${grados}deg)`;
}




function actualizar() {
	document.getElementById("porcentaje").innerHTML = grados + " º";//función creada para no repetir lineas de código

}


	/*grados += 20;
		
	
	if (grados == 360) {
		grados = 0;

	}
	document.querySelector(".flecha").style.transform =`rotate(${grados}deg)`;
		actualizar();
	
}*/



