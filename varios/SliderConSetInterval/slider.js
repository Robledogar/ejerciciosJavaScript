var imagenes = [
				"https://eticayvalores2univia.files.wordpress.com/2012/03/hombre-naturaleza.jpg",
				"https://pbs.twimg.com/media/CHJTjmYUAAA3VYT.png",
				"https://www.alchimie.com/wp-content/uploads/2020/06/4-especies-relacion-hombre-naturaleza.jpg"
				]


var x = 0;
function slider() {
	if (x > imagenes.length -1){
		x = 0;
	}
	document.getElementById("imagen").src = imagenes[x];
	x++;
}	

var temporizador = setInterval("slider()", 3000);	

function stop() {
	clearInterval(temporizador);
}		

function play() {
	temporizador = setInterval("slider()", 3000);
}