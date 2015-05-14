var canvas = document.getElementById("canvas");
var manifest = {
	"images":{},
	"animations":{
		"player": {
			"strip": "http://s29.postimg.org/t9bmce5g7/shark_head_f10.png",
			"frames": 10,
			"msPerFrame": 80
		},
	},
	"sounds": {}
};
var game = new Splat.Game(canvas, manifest);


game.scenes.add("title", new Splat.Scene(canvas, function() {
// start
	var playerSprite = game.animations.get("player");
	this.player = new Splat.AnimatedEntity(0 ,0 , playerSprite.width, playerSprite.height, playerSprite, 0, 0);


}, function(time) {
// run
	this.player.move(time);

}, function(context) {
// draw

	context.fillStyle = "green";
	context.fillRect(0, 0, canvas.width, canvas.height);
	this.player.draw(context);

}));

game.scenes.switchTo("loading");