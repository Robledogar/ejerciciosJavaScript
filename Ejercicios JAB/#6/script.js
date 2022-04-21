/*Ayuda:
document.getElementById("caja").classList.add("cambios"); remove para eliminar

como sustituir una imagen:
document.querySelector("#imagen img").src="img/imagen.jpg";

document.getElementById("caja").insertAdjacentHTML("beforeend", `<div id="caja`>Contenido</div>`);

usar el remove para regresar al estado inicial*/



window.onload = inicio;
var estado = 1;

function inicio() {

	document.querySelector(".boton").insertAdjacentHTML("beforeend", 
		`<section>
			<div class="precio">2€</div>
			<div class="imagen"><img src="https://www.html6.es/img/cafe1.png"></div>
			
		</section>
			<div class="descripcion">Café de Colombia</div>`);

	document.getElementById("contenedor").onclick = cambiar;

	
}

function cambiar() {
		var precio = 11;
		estado ++;
		if (estado == 2) {
			document.getElementById("contenedor").innerHTML = "";
			document.getElementById("contenedor").classList.remove("boton");
			document.getElementById("contenedor").classList.add("boton2");

			document.querySelector(".boton2").insertAdjacentHTML("beforeend",
				`<section class="seccion">
					<div class="precio">${precio}€</div>
					<div class="imagen"><img src="https://www.html6.es/img/cafe2.png"></div>
				</section>
				<div class="descripcion">Café Nesspreso</div>`);
			return;
		}

		else if (estado == 3) {
			precio = 23;
			document.getElementById("contenedor").classList.remove("boton2");
			document.getElementById("contenedor").classList.add("boton3");

			document.querySelector(".precio").innerHTML = precio + "€"
			document.querySelector(".seccion").insertAdjacentHTML("beforeend",
				`<div class="imagen"><img src="https://www.html6.es/img/pasta.png"></div>`);
			document.querySelector(".descripcion").innerHTML = "Café para llevar"
			return;
		}

		else {
			location.reload();
			return;

		}
		
	}

	//También podría cambiarse las imágenes así: document.querySelector(".imagen img").src=`dirección de la imagen`;
