let materias = {
		fisica:["Perez","Pedro","Pepito","Cofla","Maria"],
		programacion:["Dalto","Pedro","Juan","Pepito"],
		logica:["Hernández","Pedro","Juan","Pepito","Cofla","Maria"],
		quimica:["Rodriguez","Pedro","Juan","Pepito","Cofla","Maria"]
	}

const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	
	personas = personas;
		if (personas.length >= 21) {
			document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas <br>`)
		} else{
			personas.push(alumno);
			if (materia == "fisica") {
				materias = {
					fisica: personas,
					programacion: materias["programacion"],
					logica: materias["logica"],
					quimica: materias["quimica"],
				}

			}else if  (materia == "programacion") {
				materias = {
					fisica: materias["fisica"],
					programacion: personas,
					logica: materias["logica"],
					quimica: materias["quimica"],
				}

			}else if (materia == "logica") {
				materias = {
					fisica: materias["fisica"],
					programacion: materias["programacion"],
					logica: alunmos,
					quimica: materias["quimica"],
				}
			}else if (materia == "quimica") {
				materias = {
					fisica: materias["fisica"],
					programacion: materias["programacion"],
					logica: materias["logica"],
					quimica: personas,
				}
			}
			document.write(`Felicidades ${alumno} te has inscrito en ${materia}, correctamente. <br><br>`);
		}	
	}


document.write(materias["quimica"] + "<br><br>")

inscribir("Silvia","quimica");
inscribir("Juan","quimica");
inscribir("jwj","quimica");
inscribir("dd","quimica");
inscribir("ff","quimica");
inscribir("gg","quimica");
inscribir("hh","quimica");
inscribir("jj","quimica");
inscribir("kk","quimica");
inscribir("ll","quimica");
inscribir("ññ","quimica");
inscribir("zz","quimica");
inscribir("xex","quimica");
inscribir("xx","quimica");
inscribir("cc","quimica");
inscribir("vv","quimica");
inscribir("qq","quimica");
inscribir("ww","quimica");
inscribir("See","quimica");
inscribir("Siee","quimica");
inscribir("Srr","quimica");
inscribir("Stt","quimica");
inscribir("Stt","quimica");

document.write(materias["quimica"] + "<br><br>")

