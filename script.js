var nErrores = 0;
//var szPalabra = ["CORAZA", "SEGURIDAD", "CORTEZA", "VECINDARIO", "MURAL", "RESUMEN", "MISTERIO", "REMO", "AROMA"];
szPalabra = ["A", "ABAJO", "ABIERTO", "ABRIO", "ACABADO", "ACABAR", "ACABO", "ACTUO", "ADELANTE", "ADEMAS", "ADMIRACION", "ADONDE", "ADOQUINES", "AGITABA", "AGUA", "AGUACERO", "AHORA", "AIRE", "AL", "ALCANTARILLA", "ALGUIEN", "ALINEADO", "ALLI", "ALTO", "AMOR", "ANIMAL", "ANTES", "ANTIGUA", "APARECIO", "APARTAR", "APOSTARIA", "APOYADO", "APRESURADAMENTE", "APRETO", "AQUEL", "AQUELLO", "AQUI", "ARBOLITOS", "ARMABAN", "ARMAS", "ARRIBA", "ARRIESGARNOS", "ARROYO", "ASI", "ASOMBRARON", "ASQUEROSO", "ATENCION", "ATENTAMENTE", "ATRONADOR", "AUN", "AUNQUE", "AZUL", "AZULES", "BAILANDO", "BAILAR", "BAILARINA", "BAJARON", "BALA", "BANDA", "BARCA", "BARCO", "BARQUICHUELO", "BARQUITO", "BARRIGA", "BATIENDO", "BAYONETA", "BIEN", "BLANCOS", "BOCA", "BONITAS", "BORDE", "BRAZOS", "BRILLABA", "BRILLANTE", "BROMAS", "BUSCARLO", "CABEZA", "CADA", "CAIDA", "CAJA", "CALLE", "CAMA", "CAMBIO", "CAMPO", "CANAL", "CANARIO", "CANCION", "CANTAR", "CAPAS", "CARA", "CARTON", "CASA", "CASCANUECES", "CASCO", "CASO", "CASTILLO", "CATARATA", "CERA", "CERCA", "CERRO", "CHILLABA", "CIELO", "CINTA", "CINTURA", "CISNES", "CLAVADA", "CLOACA", "COCINA", "COGIO", "COMENZABA", "COMENZARON", "COMENZO", "COMO", "COMPARTIR", "CON", "CONJUNTO", "CONMIGO", "CONOCERLA", "CONTEMPLAR", "CONTENTO", "CONTESTO", "CONTINUABA", "CONTORSIONES", "CONVIRTIO", "CORRIAN", "CORRIENTE", "COSAS", "CREYO", "CRIADA", "CUAN", "CUANDO", "CUATRO", "CUCHARA", "CUCHILLO", "CUELLO", "CULPABLE", "DABA", "DADO", "DAMITA", "DANDO", "DAR", "DARLE", "DE", "DEDOS", "DEJAR", "DEL", "DEMAS", "DENTRO", "DEPENDIERA", "DESDE", "DESEMBOCABA", "DESHACERSE", "DESLIZABA", "DESPERTO", "DESPUES", "DETENEDLE", "DETENERSE", "DETRAS", "DIA", "DIENTES", "DIFERENTE", "DIJERON", "DIJO", "DIO", "DIRIA", "DISTINGUIDA", "DIVERTIA", "DOCE", "DONDE", "DORMIR", "DOS", "DUENDE", "E", "EL", "ELEGANTE", "ELLA", "ELLOS", "EMBARGO", "EMOCIONO", "EMPAPADO", "EMPEZO", "EN", "ENCANTADORA", "ENCONTRABA", "ENCONTRAR", "ENORME", "ENSEGUIDA", "ENTONCES", "ENTRE", "EQUILIBRIO", "ERA", "ERASE", "ERGUIDA", "ES", "ESA", "ESCUCHANDO", "ESCUCHAR", "ESCUCHO", "ESE", "ESPEJO", "ESPOSA", "ESTA", "ESTABA", "ESTABAN", "ESTADO", "ESTE", "ESTO", "ESTOY", "ESTRECHA", "ESTRECHO", "ESTUVIERA", "ESTUVIERON", "ESTUVO", "EXTENDIA", "FALTASE", "FANTASTICA", "FIJADO", "FIN", "FINA", "FIRME", "FONDO", "FRENTE", "FUE", "FUERA", "FUERON", "FUERZA", "FUESE", "FUNDIDO", "FUSIL", "GALLETAS", "GANAS", "GIRABA", "GOLPE", "GRAN", "GRANDE", "GRITADO", "GRITO", "GRITOS", "GUERRERAS", "GUERRERO", "GUSTO", "HA", "HABER", "HABIA", "HABIAN", "HABITANTES", "HABRIA", "HABRIAN", "HACIA", "HACIENDO", "HASTA", "HERMANOS", "HERMOSO", "HICIERON", "HISTORIA", "HIZO", "HOMBRO", "HOMBROS", "HORRORIZAR", "HUBIERA", "HUNDIA", "HUNDIO", "IBA", "IBAN", "IGUALMENTE", "IMAGINAOS", "IMPACIENTES", "IMPORTA", "IMPORTANTE", "IMPORTARIA", "INCOMODO", "INMUTARSE", "INSTANTE", "INTENTAR", "INTERIOR", "IRE", "JUEGOS", "JUGUETE", "JUGUETES", "JUSTO", "LA", "LADO", "LAGO", "LAGRIMAS", "LARGO", "LAS", "LATON", "LE", "LENTEJUELA", "LEVANTABA", "LEVANTAR", "LEVANTARON", "LEVANTO", "LLAMABA", "LLEGABA", "LLENANDOSE", "LLEVABA", "LLEVADO", "LLEVO", "LLORAR", "LLORASE", "LLOVER", "LLOVIDO", "LO", "LOS", "LUCHANDO", "LUCIA", "LUEGO", "LUGAR", "LUZ", "MAGNIFICO", "MAL", "MANTENIA", "MANTUVO", "MAS", "ME", "MENOS", "MERCADO", "MESA", "MI", "MIENTRAS", "MIRA", "MIRADA", "MIRAR", "MIRARLA", "MIRO", "MISMA", "MISMO", "MISMOS", "MOMENTO", "MORTALES", "MOVIERON", "MOVIO", "MUCHACHOS", "MUCHO", "MUCHOS", "MUJER", "MUNDO", "MUSELINA", "MUY", "NADA", "NADABAN", "NADIE", "NAVEGANDO", "NAVEGAR", "NEGRO", "NI", "NINGUN", "NO", "NOCHE", "NOCHES", "NOSOTROS", "NUNCA", "O", "OH", "OIDOS", "OIR", "OJOS", "OLAS", "ORGULLOSO", "OSCURA", "OSCURIDAD", "OSCURO", "OTRA", "OTROS", "OYERON", "PAGADO", "PALMADAS", "PALMAS", "PANTALONES", "PAPEL", "PARA", "PARABAN", "PARAR", "PASAN", "PASAPORTE", "PASARON", "PASEO", "PEAJE", "PELIGROSO", "PENSABA", "PENSADO", "PENSO", "PEOR", "PERCIBIR", "PERDER", "PERIODICO", "PERO", "PERSONAJE", "PESAR", "PESCADO", "PEZ", "PIE", "PIENSAN", "PIERNA", "PIERNAS", "PINTADO", "PINTARRAJEADO", "PISARLO", "PISO", "PIZARRA", "PLOMO", "POBRE", "POCO", "PODIA", "PODIAN", "PODRIA", "POR", "PORQUE", "PRECIOSO", "PRECIPITO", "PRECISAMENTE", "PREGUNTO", "PRIMERO", "PRONTO", "PROPIA", "PUDIERON", "PUDO", "PUERTA", "PUES", "PUESTO", "PUNTILLAS", "PUNTO", "PUSIERON", "PUSO", "QUE", "QUEDO", "QUERIA", "QUERIAN", "QUIEN", "QUIERES", "QUIETO", "RAPIDA", "RAPIDEZ", "RASGARSE", "RATA", "RAYO", "RECHINABAN", "RECOGIERON", "RECORTADO", "REFLEJABAN", "REGALADO", "RELOJ", "RENDIRSE", "RESONO", "RESULTADO", "RETRATO", "RINDAS", "RODEABAN", "ROJAS", "RUIDO", "SABER", "SALA", "SALIR", "SALON", "SALONES", "SALTABA", "SALTOS", "SANTO", "SE", "SEGUIA", "SEGUIDO", "SEGURO", "SENTIA", "SENTIR", "SER", "SI", "SIDO", "SIEMPRE", "SIGUIENTE", "SIMULABA", "SIN", "SINTIO", "SIQUIERA", "SIRVIENTE", "SOBRE", "SOLA", "SOLDADITO", "SOLDADITOS", "SOLDADO", "SOLO", "SOMOS", "SONIDO", "SORDO", "SU", "SUFICIENTE", "SUS", "TAMBIEN", "TAN", "TANTA", "TANTO", "TAPA", "TE", "TENDIDO", "TENDIO", "TENGO", "TENIA", "TERCER", "TERMINAR", "TERMINARLO", "TERRIBLE", "TERRIBLES", "TIENES", "TIZA", "TODA", "TODAS", "TODAVIA", "TODO", "TODOS", "TORRENCIAL", "TRAGO", "TRAJE", "TRATA", "TRATABA", "TRES", "TRIPA", "TUNEL", "ULTIMO", "UN", "UNA", "UNAS", "UNICA", "UNICOS", "UNIFORME", "UNO", "UNOS", "USTEDES", "UY", "VALENTIA", "VALIENTE", "VAMOS", "VARIAS", "VAYA", "VECES", "VEINTICINCO", "VEINTICUATRO", "VENDIDO", "VENIAN", "VENTANA", "VENTANILLAS", "VER", "VERAS", "VERIA", "VERSELA", "VERSO", "VERTIGINOSAMENTE", "VERTIGOS", "VEZ", "VIAJADO", "VIDA", "VIEJA", "VIO", "VISITAS", "VISTA", "VISTO", "VIVE", "VIVIA", "VIVO", "VOY", "VUELTAS", "Y", "YA", "YENDO", "YO", "ZAS", "ZOZOBRAR"];
var nTotalPalabras = szPalabra.length - 1;
var nAleatorio = 0;
var szPalabraActual = "";
var szLetraElegida = "";
var szErrores = "";
var szAciertos = "";
var szResultadoFiltrado = "";
var bTerminado = false;
var audioWin;
var audioLose;
var audioAcierto;
var audioError;
var tmpAnimarPlanta;
const MAXERRORES = 11;
var nInicioPlanta = 1200;
var nPosActualPlanta = 1200;

//Cargo la lista de palabras

//Cargo los sonidos del disco

audioWin = new Audio("sonidos/ganaste.mp3");
audioLose = new Audio("sonidos/perdiste.mp3");
audioAcierto = new Audio("sonidos/acierto.wav");
audioError = new Audio("sonidos/error.wav");

//Agrego el evento para llamar al click del botón al apretar Enter en el input

document.getElementById("letraelegida").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-procesar").click();
  }
});

nPosActualPlanta = nInicioPlanta;

setInterval(function () {
	if(bAnimarPlanta)
	{
		nPosActualPlanta = nPosActualPlanta - 25;
		document.getElementById("imgplanta").style.left = nPosActualPlanta + "px";
	}
}, 300);

reiniciar();


function filtrarResultado()
{
	// szResultadoFiltrado = szPalabraActual.substring(0,1);
	szResultadoFiltrado = "";
	var bEsAcierto = false;
	for (var j=0; j< szPalabraActual.length; j++)
	 {
	 	bEsAcierto = false;
	 	for (var i=0; i< szAciertos.length; i++)
	 	{
	 		// if(szPalabraActual.substring(j, j + 1) == szAciertos.substring(i, i + 1)) 
	 		if(szPalabraActual.charAt(j) == szAciertos.charAt(i)) 
	 		{
	 			bEsAcierto = true;
	 		}
	 	}
		if(bEsAcierto)
		{
			// szResultadoFiltrado+= szPalabraActual.substring(j, j + 1);
			szResultadoFiltrado+= szPalabraActual.charAt(j);
		}
		else
		{
			// szResultadoFiltrado += "-";
			szResultadoFiltrado += " ";
		}
		
	}
	// document.getElementById("txtresultadofiltrado").value = szResultadoFiltrado;
	document.getElementById("txtresultadofiltrado").innerHTML = szResultadoFiltrado;
}

function sumarError()
{
	//Busco si el error ya se había cometido
	var bErrorExiste = false;

	for(var j=0; j<szErrores.length; j++)
			{
				// if(szErrores.substring(j, j + 1) == szLetraElegida) 
				if(szErrores.charAt(j) == szLetraElegida) 
				 {
				 	bErrorExiste = true;
				 }
			}


	if(!bErrorExiste)
	{
		if(nErrores < MAXERRORES) nErrores++;
		szErrores += szLetraElegida;
		audioError.play();
	}
	
	mostrarPartes();

}

function sumarAcierto()
{
	//Busco si el acierto ya se había logrado
	var bAciertoExiste = false;

	if(szAciertos.indexOf(szLetraElegida) > -1)
	{
		bAciertoExiste = true;
	}


	if(!bAciertoExiste)
	{
		//if(nErrores < MAXERRORES) nErrores++;
		szAciertos += szLetraElegida;
		audioAcierto.play();
	}
	//alert(szAciertos);
	mostrarPartes();
}

function procesarLetra()
{
	if(!bTerminado)
	{
		szLetraElegida = document.getElementById("letraelegida").value;
		szLetraElegida = szLetraElegida.toUpperCase();

		if(szLetraElegida != "")
		{

			var bEncontrada = false;
			// alert(szPalabraActual.length);
			for(var j=0; j<szPalabraActual.length; j++)
				{
					// if(szPalabraActual.substring(j, j + 1) == szLetraElegida) 
					if(szPalabraActual.charAt(j) == szLetraElegida) 
					 {
					 	bEncontrada = true;
					 	sumarAcierto();
					 }
				}
			if(!bEncontrada) { 
				sumarError();
			}
		}
	}
}

function reiniciar()
{
	var szGuiones = "";

	bAnimarPlanta = false;
	nPosActualPlanta = nInicioPlanta;
	document.getElementById("imgplanta").style.left = nPosActualPlanta + "px";
	nErrores = 0;
	szErrores = "";
	//szAciertos = "";
	szResultadoFiltrado = "";
	mostrarPartes();
	nAleatorio = Math.round(Math.random() * nTotalPalabras);
	szPalabraActual = szPalabra[nAleatorio];

	//Siempre cuento la inicial como un primer acierto
	//szAciertos=szPalabraActual.substring(0,1);
	szAciertos=szPalabraActual.charAt(0);
	// document.getElementById("buscada").value = szPalabraActual;

	//Pongo los guiones abajo de cada letra
	for(var j=0; j<szPalabraActual.length; j++)
	{
		szGuiones += "-";
	}
	document.getElementById("txtguiones").innerHTML = szGuiones;
	filtrarResultado();
	document.getElementById("divmensaje").style.display = "none";
	document.getElementById("letraelegida").disabled = false;
	document.getElementById("letraelegida").select();
	document.getElementById("letraelegida").focus();
	bTerminado = false;
	nPosActualPlanta = nInicioPlanta;
	bAnimarPlanta = false;
	const tmpAnimarPlanta = setTimeout(animarPlanta, 20000);

}

function animarPlanta()
{
	bAnimarPlanta = true;
}


function mostrarPartes()
{
	// document.getElementById("errores").value = nErrores;
	var parteMostrada = "";
	for(j=1; j<=MAXERRORES; j++)
	{
		parteMostrada = "img" + j;
		if(j<=nErrores){
			document.getElementById(parteMostrada).style.display = "inline-block";
		}
		else
		{
			document.getElementById(parteMostrada).style.display = "none";
		}
		
	}
	// document.getElementById("listaerrores").value = szErrores;
	document.getElementById("listaerrores").innerHTML = szErrores;
	// alert(szAciertos);
	// document.getElementById("txtaciertos").value = szAciertos;
	document.getElementById("letraelegida").select();
	document.getElementById("letraelegida").focus();
	filtrarResultado();
	//Revisar si llegó el fin del juego
	if(szPalabraActual==szResultadoFiltrado && szPalabraActual != "")
	{
		//Ganó el juego
		document.getElementById("textomensaje").innerHTML = "¡GANASTE, FELICIDADES!";
		document.getElementById("divmensaje").style.display = "block";
		bTerminado = true;
		document.getElementById("letraelegida").disabled = true;
		audioWin.play();
		bAnimarPlanta = false;
	}
	if(nErrores==MAXERRORES)
	{
		//Perdió
		document.getElementById("textomensaje").innerHTML = "FIN DEL JUEGO";
		document.getElementById("divmensaje").style.display = "block";
		bTerminado = true;
		document.getElementById("letraelegida").disabled = true;
		audioLose.play();
		bAnimarPlanta = false;
	}
}