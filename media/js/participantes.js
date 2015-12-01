$(document).on("click","button.ver",function(){
	var id = $(this).data("id");

	$.ajax({
		url:$base_url+"cusuarios/verDatosIndividuo",
		type:"POST",
		data:{individuo_id:id},
		dataType:"json",
	}).done(function(data){
		var dataJson = eval(data);
		$("#nombres").val(dataJson['datos'].individuo_nombres);
		$("#apellidos").val(dataJson['datos'].individuo_apellidos);
		$("#dni").val(dataJson['datos'].individuo_dni);
		$("#email").val(dataJson['datos'].individuo_email);
		$("#movil").val(dataJson['datos'].individuo_movil);
		$("#puntos").val(dataJson['datos'].partida_aciertos*10);
		$("div#ventanaModal").modal("show");
		console.log(dataJson);
	}).fail(function(){
		console.log("error");
	});
});

$(document).on("click","button.eliminar",function(){
	
var resp = confirm("¿DESEA ELIMINAR ESTE REGISTRO?");

if (resp) {
	var element = $(this);
	var id = $(this).data("id");
	$.ajax({
		url:$base_url+"cusuarios/eliminarIndividuo",
		type:"POST",
		data:{individuo_id:id},
		dataType:"json",
	}).done(function(data){
		var dataJson = eval(data);
		if (dataJson['success']) {
			element.closest("tr").remove();
		}else{
			alert("No se ha podido eliminar.");
		}
	}).fail(function(){
		console.log("error");
	});
}

});