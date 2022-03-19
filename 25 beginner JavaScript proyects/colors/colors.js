var index = 0;

function cambiarColor () {
	var colors = ["red", "blue", "orange", "yellow", "black", "green", "purple", "#556677"];

	document.getElementsByTagName("body")[0].style.background = colors[index++];

	if (index > colors.length -1) {
		index = 0;
	}

	document.getElementsByTagName("div")[0].style.background = colors [index];
}