var canvas = document.getElementById("canvas");
var assets = {
  "images":{},
  "animations":{},
  "sounds": {}
};
var game = new Splat.Game(canvas, assets);


game.scenes.add("title", new Splat.Scene(canvas, function() {
	// setup

}, function() {
	// simulation

}, function(context) {
	// draw
  
	context.fillStyle = "#F4EFC6";
	context.fillRect(0, 0, canvas.width, canvas.height);

}));



game.scenes.switchTo("loading");