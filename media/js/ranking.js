$.fn.regresar = function(){
	window.location.href = $base_url;
}
$(function(){
	$.ajax({
		url:$base_url+"cpartidas/infoRanking",
		type:"POST",
		dataType:"json",
	}).done(function(data){
		var dataJson = eval(data);
		var htm="";
		var i=1;

		if (!dataJson['puntos']) {
			$(".puntos_usuario").hide();
		}else{
			$("#mis_puntos").html((dataJson['puntos'].partida_aciertos)*10);
		}

		if (dataJson['ranking'].length > 0) { 
            $.each(dataJson['ranking'], function(clave, valor) { 

            	htm += '<div class="usuarios">'+
					'<div class="puesto"> '+i+'</div>'+
					'<div class="player"> '+valor.individuo_nombres+' '+valor.individuo_apellidos+'</div>'+
					'<div class="puntos"> '+(valor.partida_aciertos)*10+' </div>'+
				'</div>';i++;
            });
            $("#lista_Ranking").html(htm);
        }

	}).fail(function(){
		console.log("error");
	});
});