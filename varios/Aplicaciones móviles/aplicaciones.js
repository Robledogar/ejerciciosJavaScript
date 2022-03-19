class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true){
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true){
			this.iniciada = false;
			alert("app apagada");
		}
	}
	instalar(){
		if (this.instalada == false){
			this.instalada = true;
			alert("app instalada correctamente");
		}
	}
	desinstalar(){
		if (this.instalada == true){
			this.instalada = false;
			alert("app desinstalada correctamente");
		}
	}
	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b><br>
		Puntuación: <b>${this.puntuacion}</b><br>
		Peso: <b>${this.peso}</b><br>
		`
	}
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("9.000","4 estrellas","100mb");
app3 = new App("5.000","4 estrellas","200mb");
app4 = new App("100.000","2 estrellas","300mb");
app5 = new App("20.000","3 estrellas","400mb");
app6 = new App("100","4 estrellas","900mb");
app7 = new App("2.500","5 estrellas","1000mb");

document.write(`
	${app.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`)