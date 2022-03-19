function generate () {
	var frases = {
		"- Lao Tsé": '"No hay que ir para atrás ni para darse impulso"',
		"- Mahatma Gandhi": '"No hay caminos para la paz; la paz es el camino"',
		"- Confucio": '"Aprende a vivir y sabrás morir bien"',
		"- Albert Einstein": '"Cada día sabemos más y entendemos menos"',
		"- Alberto Puerta": '"No tenéis ni piiiiiii idea"'
	}


	var authors = Object.keys(frases);
	/*El método Object.keys() devuelve un array de las propiedades 
	names de un objeto, en el mismo orden como se obtienen en un loop normal

	Sintaxis:
	Object.keys(obj)

	Parámetros:
	obj El objeto cuyas propiedades enumerables serán devueltas.

	Valor de retorno:
	Un array de strings que representan toda las propiedades  del objeto

	Descripción:
	Object.keys devuelve un array cuyos elementos son strings correspondientes a las 
	propiedades enumerables que se encuentran directamente en el object. El orden de las 
	propiedades es el mismo que se proporciona al iterar manualmente sobre las propiedades 
	del objeto.
	*/

	var author = authors[Math.floor(Math.random() * authors.length)];

	/* Esto genera un nombre random entre el primero y el último nombre
	del array asociativo*/

	var quote = frases[author];

	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;


	
}