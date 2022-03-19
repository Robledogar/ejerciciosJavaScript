let ojos = ["azules","rojos","verdes","negros","marrones","morados","rosas","gris","blancos"];
let cuerpos = ["gordo","delgado","muy gordo","muy delgado","alto","muy alto","bajo","muy bajo","con capa"];
let piernas = ["largas","muy largas","cortas","muy cortas","pantalón","falda","con calcetines","desnudas","sucias"];

//Listas de atributos utilizados
let recuentoOjos = [];
let recuentoCuerpos = [];
let recuentoPiernas = [];



//Numerador de la colección
	let numeroColeccion = 1;

function crearNft() {


	
	document.write(`NFT: #${numeroColeccion} de ${cantidadNfts}<br>`)

	// ojos
	let numero1 = Math.random() * 9;
	numero1 = Math.floor(numero1);
	document.write(`Ojos de color: <b>${ojos[numero1]}</b>` + "<br>");
	recuentoOjos.push(ojos[numero1]);

	//cuerpos
	let numero2 = Math.random() * 9;
	numero2 = Math.floor(numero2);
	document.write(`Tipo de cuerpo: <b>${cuerpos[numero2]}</b>` + "<br>");
	recuentoCuerpos.push(cuerpos[numero2]);

	//piernas
	let numero3 = Math.random() * 9;
	numero3 = Math.floor(numero3);
	document.write(`Piernas: <b>${piernas[numero3]}</b>` + "<br><br><br>");
	recuentoPiernas.push(piernas[numero3]);

	numeroColeccion++;

}

//bucle para la función de creación de NFTs
let cantidadNfts = prompt("Cuantos Nfts quieres crear");
let n = 0;


while (n < cantidadNfts) {
	n++;
	crearNft();
}



//Rareza de los atributos
//document.write(`Ojos utilizados: <b>${recuentoOjos}</b><br>`);
//document.write(`Cuerpo utilizado: <b>${recuentoCuerpos}</b><br>`);
//document.write(`Piernas utilizadas: <b>${recuentoPiernas}</b><br><br>`);



var coef = 0;
var recorredorDeArrays = 0;

for (i = 0; i < cantidadNfts; i++) {
	let comprobador = recuentoOjos[i].includes(ojos[recorredorDeArrays]);
	//document.write(comprobador + "<br>");

	if (comprobador)  {
		coef++
	}
	
}
coef = coef * 100 / cantidadNfts;

document.write(`La rareza de los ojos ${ojos[recorredorDeArrays]} es del ${coef}%`);








