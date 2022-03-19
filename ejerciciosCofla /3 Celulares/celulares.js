 class Celular {
 	constructor(color,peso,tamaño,rdc,ram){
 		this.color = color;
 		this.peso = peso;
 		this.tamaño = tamaño;
 		this.resolucionDeCamara = rdc;
 		this.memoriaRam = ram;
 		this.encendido = false;
 	}
 	presionarBotonEncendido(){
 		if (this.encendido == false) {
 			alert("celular prendido");
 			this.encendido = true;
 		} else {
 			alert("El celular apagado");
 			this.encendido = false;
 		}
 	}
 	
 	reiniciar(){
 		if (this.encendido == true) {
 			alert("Reiniciando celular");
 		} else {
 			alert("El celular está apagado");
 		}
 	}

 	tomarFoto(){
 		alert(`Foto tomada en una resolución de: ${this.resolucionDeCamara}`);
 	}

 	grabarVideo(){
 		alert(`Grabando vídeo en ${this.resolucionDeCamara}`);
 	}

 	mobileInfo(){
 		return `
 			Color: <b>${this.color}</b></br>
 			Peso: <b>${this.peso}</b></br>
 			Tamaño: <b>${this.tamaño}</b></br>
 			Memoria Ram: <b>${this.memoriaRam}</b></br>
 			Resolución de vídeo: <b>${this.resolucionDeCamara}</b></br>

 		`;
 	}

 }

 class CelularAltaGama extends Celular {
 	constructor(color,peso,tamaño,rdc,ram,rdce){
 		super(color,peso,tamaño,rdc,ram);
 		this.resolucionDeCamaraExtra = rdce;
 	}

 	grabarVideoLento(){
 		alert("estás grabando en cámara lenta");
 	}

 	reconocimientoFacial(){
 		alert("Vamos a iniciar el reconocimiento facial");
 	}

 	infoAltaGama(){
 		return this.mobileInfo() + `Resolución de cámara extra: <b>${this.resolucionDeCamaraExtra}</b> `
 	}
 }


 //celular1 = new Celular("rojo","150gr","5´","hd","1GB");
 //celular2 = new Celular("negro","155gr","5.4´","full hd","2GB");
 //celular3 = new Celular("blanco","146gr","5.9´","full hd","2GB");


//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130gr","5.2","4K","3Gb","fullhd");
celular2 = new CelularAltaGama("negro","142gr","6","4K","4Gb","HD");

document.write(`
	${celular1.infoAltaGama()} <br><br>
	${celular2.infoAltaGama()} <br>
	


	`)
