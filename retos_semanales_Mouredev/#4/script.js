//Triangulo = base * altura / 2
//cuadrado = lado * lado
//rectangulo =  largo * ancho

let areaTriangulo = 0;
let areaOtro = 0;



function calcularArea(valor1, valor2) {

		areaTriangulo= valor1 * valor2 / 2;
		areaOtro = valor1 * valor2;
	

		console.log("El área del triángulo es: " + areaTriangulo);
		console.log("El área del cuadrado o rectángulo es: " + areaOtro);
}





calcularArea(prompt("Primer valor"), prompt("Segundo valor"));