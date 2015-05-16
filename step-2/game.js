var canvas = document.getElementById("canvas");
var assets = {
  "images":{},
  "animations":{
  	"background": {
			"strip": "../shared/images/background.png",
			"frames": 1,
			"msPerFrame": 1	
		}
  },
  "sounds": {}
};
var game = new Splat.Game(canvas, assets);


game.scenes.add("title", new Splat.Scene(canvas, function() {
	// setup
	var backgroundImage = game.animations.get("background");
	this.background = new Splat.AnimatedEntity(0, 0, backgroundImage.width, backgroundImage.height, backgroundImage, 0, 0);

}, function() {
	// simulation

}, function(context) {
	// draw
  	
  	this.background.draw(context);

}));



game.scenes.switchTo("loading");