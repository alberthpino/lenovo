$(function(){
	pregunta_actual = $.fn.getPreguntaActual();
	$("#Modal").modal({
		backdrop:false,
		show:false,
	});
});

$(document).on("click","div.radio",function(){
	$(this).find("label").find("input").attr( "checked", "checked");
	if (pregunta_actual<= 12) {
    	clearInterval(timer);
    	opcion = $(this).find("input").val();
    	if (preguntas[pregunta_actual-1][3] == opcion) {
    		datos="partida_aciertos=1&partida_fallos=0&partida_tiempo="+contador;
    	}else{
    		datos="partida_aciertos=0&partida_fallos=1&partida_tiempo="+contador;
    	}
    	$.fn.actualizarDatosPartida(datos);
	};
});

$.fn.getPreguntaActual = function(){
	var orden = 0;
	$.ajax({
		url: $base_url+"cpartidas/getPreguntaActual",
		type:"POST",
		dataType:"json",
		data:datos,
		async:false,
		cache:false,
	}).done(function(data){
		var dataJson = eval(data);
		orden = parseInt(dataJson['orden']);
	}).fail(function(){
		console.log("error");
	});
	return orden;
}

var datos="";
var opcion;
var timer;
var contador = 0;
var preguntas = [['¿Con qué botón se acerca la mira del sniper?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Rueda del mouse</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> Click derecho</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Click Izquierdo</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> La tecla S</label></div>','2'],

		['¿Cómo haces para insertar una tabla en un documento de Word?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Barra de herramientas / Tabla / Insertar / Cuadro estadístico</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> Barra de herramientas / Insertar / Tabla / Cuadro estadístico</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Barra de herramientas / Insertar / Tabla</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Barra de herramientas / Tabla / Insertar / Tabla.</label></div>','4'],
		['¿Qué compañía ha distribuido toda la saga de Call of Duty?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Blizard Entertainment</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> PS4</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> EA</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Activision</label></div>','4'],
		['El día del trabajo se celebra el:','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> 31 de mayo</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> 1ro de marzo</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> 1ro de mayo</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> 8 de octubre</label></div>','3'],
		['¿Cuál Call of Duty hizo más dinero que cualquier película de Hollywood el día de su lanzamiento?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Ghost</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2">  Black Ops 3</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Modern Warfare 3</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Black Ops</label></div>','3'],
		['En la imagen, verás uno de los trabajos más raros del mundo, dinos cuál es:','../media/img/preg6.png','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Buzo profesional de charcos.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2">  Recogedor de pelotas de golf bajo el agua.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Anfibio en horas libres.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Buzo de RÍO.</label></div>','2'],
		['¿En qué año se desarrolla la trama de la saga de Call of Duty Black Ops 3? ','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> 2065</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2">  1939</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> 2056</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> 1914</label></div>','1'],
		['¿Cuánto tiempo de vacaciones por un año te corresponde si te encuentras en planilla?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> 45 días.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> 30 días.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> 15 días.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> 60 días.</label></div>','2'],
		['¿Qué mapa es y de qué Call of Duty pertenece','../media/img/preg9.png','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Warsaw – Call of Duty 2</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> Chernobyl – Call of Duty 4.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Leningrado – Call of Duty 2.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Chernobyl – Black Ops 2.</label></div>','2'],
		['A través de qué fórmula se realiza una suma simple en Excel:','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> =SUMA(primera_celda-última_celda)</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> =SUMA(primera_celda=última_celda)</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> =SUMA(primera_celda/última_celda)</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> =SUMA(primera_celda:última_celda)</label></div>','4'],
		['¿Qué arma se puede ver en la imagen?','../media/img/preg11.png','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> SCAR-H</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> P90</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Ksg 12</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> UMP 45</label></div>','1'],
		['El sistema de pensiones en el Perú se divide en:','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> AFP y ONT</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> AFP y ONP</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> APF Y ONC</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> APF Y ONP</label></div>','2']];


$.fn.mostrarPregunta = function() {

	if (pregunta_actual < 12) {

		$("div#timer_reloj").html('<br><div id="bluecircle" data-text="0" data-percent="0" class="red"></div>');
		$("div#bluecircle").perCircle();
    	$(".numero_pregunta").html((pregunta_actual+1)+"/12");
    	$(".pregunta").html(preguntas[pregunta_actual][0]);
    	$("#alternativas").html(preguntas[pregunta_actual][2]);
    	if (preguntas[pregunta_actual][1]=='') {
    		$("#imagen").hide();
    	}
    	else{
    		$("#imagen img").attr("src",preguntas[pregunta_actual][1]);
			$("#imagen").show();
    	}
		
		contador = 0;
		var g = 0;
		timer = setInterval(function(){
			contador+=1;
			
			if (contador <=10) {
				g+=36;
				$("div#bluecircle span b").html(contador);
				if (g == 216) {
					$("div#bluecircle").addClass("gt50");
				};
				if (g == 36) {
					$("div#bluecircle").removeClass("gt50");
				};
					$("div#bluecircle div.slice div.bar").css({
				        'transform' : 'rotate('+g+'deg)',
				        '-moz-transform' : 'rotate('+g+'deg)',
				        '-webkit-transform' : 'rotate('+g+'deg)',
				        '-o-transform' : 'rotate('+g+'deg)'
			    });
				
			};
			if (contador == 11) {
				clearInterval(timer);
				datos="partida_aciertos=0&partida_fallos=1&partida_tiempo=10";
				$.fn.actualizarDatosPartida(datos);
			};
		},1000);
	}else{

		$.fn.getRankingPersonal();

	}
	pregunta_actual++;
}

$.fn.getRankingPersonal = function(){

	$.ajax({
		url:$base_url+"cpartidas/getRankingPersonal",
		type:"POST",
		dataType:"json",
	}).done(function(data){
		var dataJson = eval(data);
		
		$("div#Modal .modal-body span.label-success").html(dataJson['partida'].partida_aciertos);
		$("div#Modal .modal-body span.label-danger").html(dataJson['partida'].partida_fallos);
		$("div#Modal").modal("show");
		setTimeout(function(){
			window.location.href = $base_url+"cpartidas/ranking";
		},3000)

	}).fail(function(){
		console.log("error");
	});
}

$.fn.actualizarDatosPartida = function(datos){
	$.ajax({
		url:$base_url+"cpartidas/actualizarDatosPartida",
		type:"POST",
		dataType:"json",
		data:datos,
		async:false,
		cache:false,
	}).done(function(data){
		var dataJson = eval(data);
		console.log(dataJson['success']);
		$.fn.mostrarPregunta();
	}).fail(function(){
		console.log("error");
	});

}

$(function(){
	$.fn.mostrarPregunta();
});
