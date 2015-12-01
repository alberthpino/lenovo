$(document).on("click","a.submit-form",function(e){
	e.preventDefault();
	if ($("#nombres").val()!='' && $("#apellidos").val()!='' && $("#dni").val()!='' && $("#email").val()!='' && $("#condiciones").is(':checked')) {
    	dni = $("#dni").val();
		if (dni.length !=8 || !$.isNumeric(dni)) {
			$("#mssge").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Este no parece un Dni Válido');
    		$("#mssge").fadeIn();
    	}
    	else{
	    	var datos = $("form#registroIndividuo").serialize();
	    	datos+="&tipo_partida_id="+$(this).data("tipo"),
	    	$.ajax({
	    		url:$base_url+"cusuarios/registroIndividuo",
	    		data:datos,
	    		dataType:"json",
	    		type:"POST",
	    	}).done(function(data){
	    		var dataJson = eval(data);
	    		if (dataJson['success'] > 0) {
	    			$("form#registroIndividuo")[0].reset();
	    			window.location.href = $base_url+"cpreguntas/juego";
	    		}else{
	    			$("#mssge").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Este DNI ya fue registrado');
    				$("#mssge").fadeIn();
	    		}
	    	}).fail(function(){
	    		console.log("error");
	    	});
    	}
	}else{
    	$("#mssge").html('<span class="glyphicon glyphicon-exclamation-sign"></span> Complete todos los campos');
    	$("#mssge").fadeIn();
	}
});