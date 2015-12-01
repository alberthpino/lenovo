/* REPRODUCTOR VIDEO */
var playIcon = true;
var vol  = true;
$(document).on("click",".play",function(){
	var video = document.getElementById('video1');
	if (playIcon) {
		$(this).html('<i class="glyphicon glyphicon-pause"></i>');
		playIcon = false;video.play();
	}else{
		playIcon = true;video.pause(); 
		$(this).html('<i class="glyphicon glyphicon-play"></i>');
	}
});
$(document).on("click",".prev",function(){
    var video = document.getElementById("video1");
    video.currentTime -= 5;
})
$(document).on("click",".skip",function(){
    var video = document.getElementById("video1");
    video.currentTime += 5;
});
$(document).on("click",".full",function(){
    var elem = document.getElementById("video1");
	if (elem.requestFullscreen) {
	  elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) {
	  elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
	  elem.webkitRequestFullscreen();
	}
});

$(document).on("click",".volume",function(){
	var video = document.getElementById('video1');
	
	if (vol) {
		$(this).html('<i class="glyphicon glyphicon-volume-off"></i>');
		vol = false;video.muted = true;
	}else{
		vol = true;video.muted = false;
		$(this).html('<i class="glyphicon glyphicon-volume-up"></i>');
	}
})