(function(){
	var helloSpeaker=new Object();
	var speakWord="Hello";
	helloSpeaker.speak=function(name){
		console.log(speakWord+" "+name);
	}
	
	window.speak=helloSpeaker.speak;
	window.helloSpeaker=helloSpeaker;
})()