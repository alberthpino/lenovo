$(function(){
	pregunta_actual = $.fn.getPreguntaActual();
});

$(document).on("click","div.radio",function(){
	
	$(this).find("label").find("input").attr( "checked", "checked");
	
	if (pregunta_actual<= 12) {
    	clearInterval(timer);
    	opcion = $(this).find("label").find("input").val();
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
		url: "../cpartidas/getPreguntaActual",
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
var preguntas = [['¿Qué arma se puede ver en la imagen?','../media/img/preg1-b.png','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> SCAR-H</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> P90</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Ksg 12</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> UMP 45</label></div>','4'],

		['¿Con que lápiz debes realizar tu examen de admisión o marcar una cartilla óptica de un examen? ','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> 2V</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> 2D</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> 2H</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> 2B</label></div>','4'],
		['¿Cómo se llama el último juego de la saga que se ha lanzado este Noviembre?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Ghost</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> Black Ops 3</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Modern Warfare 3</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Black Ops</label></div>','2'],
		['¿ Qué símbolo corresponde al elemento del manganeso?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Ms</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> Mn</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Mg</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Ns</label></div>','2'],
		['¿Qué compañía ha distribuido toda la saga de Call of Duty? ','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Blizard Entertainment</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2">  PS4</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> EA</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Activision</label></div>','4'],
		['Conjuga el verbo cantar de la primera persona en plural en futuro imperfecto:','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Cantaremos</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2">  Cantaríamos</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Cantaré</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Cantamos</label></div>','1'],
		['¿Qué mapa es y de qué Call of Duty pertenece? ','../media/img/preg7-b.png','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Warsaw – Call of Duty 2</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2">  Chernobyl – Call of Duty 4.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Leningrado – Call of Duty 2.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Chernobyl – Black Ops 2.</label></div>','1'],
		['¿Cuál es considerada como la flor nacional?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> La flor de papa.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> La cantuta.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Margaritas</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Orquídeas</label></div>','2'],
		['¿Con qué botón se acerca la mira del sniper?','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Rueda del mouse</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> Click derecho</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Click izquierdo</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> La tecla S.</label></div>','2'],
		['¿Qué personaje es de la siguiente imagen y en qué conflicto participó?','../media/img/preg10-b.png','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> Miguel Grau – Combate de Angamos.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> Miguel Grau – Batalla de Tarapacá</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Avelino Cáceres – Combate de Angamos.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Francisco Bolognesi – Guerra del Pacífico.</label></div>','1'],
		['¿Qué arma se puede ver en la imagen? ','../media/img/preg12.png','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> SCAR-H</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> P90</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Ksg 12</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> UMP 45</label></div>','3'],
		['Identifica el objeto directo de la siguiente oración: <br>“El día domingo celebramos junto a mis amigos la victoria de mi equipo”.','','<div class="radio"><label class="opcion"><input type="radio" name="optradio" value="1"> El día domingo</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="2"> La victoria de mi equipo.</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="3"> Junto a mis amigos</label></div><div class="radio"><label class="opcion"><input type="radio" name="optradio" value="4"> Celebramos</label></div>','2']];

$(function(){
	$.fn.mostrarPregunta();
});

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
			$("#imagen").fadeIn();
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
	}).done(function(data){
		var dataJson = eval(data);
		console.log(dataJson['success']);
		$.fn.mostrarPregunta();
	}).fail(function(){
		console.log("error");
	});

}
