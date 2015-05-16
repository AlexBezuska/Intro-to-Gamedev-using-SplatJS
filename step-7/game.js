var canvas = document.getElementById("canvas");
var assets = {
  "images":{},
  "animations":{
  	"background": {
			"strip": "../shared/images/background.png",
			"frames": 1,
			"msPerFrame": 1	
		},
	"player": {
			"strip": "../shared/images/dino.png",
			"frames": 19,
			"msPerFrame": 50
		},
		"food": {
			"strip": "../shared/images/fruit.png",
			"frames": 10,
			"msPerFrame": 120
		}
  },
  "sounds": {}
};
var game = new Splat.Game(canvas, assets);


game.scenes.add("title", new Splat.Scene(canvas, function() {
	// setup
	var backgroundImage = game.animations.get("background");
	this.background = new Splat.AnimatedEntity( 0, 0, backgroundImage.width, backgroundImage.height, backgroundImage, 0, 0 );

	var playerSprite = game.animations.get("player");
	this.player = new Splat.AnimatedEntity( 450, 250, playerSprite.width, playerSprite.height, playerSprite, 0, 0 );
	this.player.angle = 0;

  this.food = [];
  this.foodSprite = game.animations.get("food");
  makeFood(this.food, this.foodSprite);


}, function(time) {
	// simulation

	if(game.keyboard.isPressed("left")){
		rotate(this.player, "left", 1);
	}

	if(game.keyboard.isPressed("right")){
		rotate(this.player, "right", 1);
	}

	this.player.speed = 0;

	if(game.keyboard.isPressed("up")){
		this.player.move(time);
		this.player.speed = 0.3;
	}

	if(game.keyboard.isPressed("down")){
		this.player.move(time);
		this.player.speed = -0.1;
	}
	
	moveForward(this.player, this.player.speed);

	keepOnScreen(this.player);

	
}, function(context) {
	// draw
  	
  	this.background.draw(context);
  	drawMultiple(context, this.food);
  	this.player.draw(context);

  	

}));



game.scenes.switchTo("loading");

function makeFood(array, sprite) {
	var foodEntity = new Splat.AnimatedEntity(randomRange(0, canvas.width), randomRange(0, canvas.height), sprite.width, sprite.height, sprite, 0, 0);
	array.push(foodEntity);
}














//Alex's Useful tools

function fillScreen(context, color){
	context.fillStyle = color;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function rotate(entity, direction, speed){
	if(entity instanceof Array){
		for(var i = 0; i < entity.length; i++){
			if(direction == "right"){
				entity[i].angle += speed;
			}else if(direction == "left"){
				entity[i].angle -= speed;
			}
		}
	}else{
		if(direction == "right"){
			entity.angle += speed;
		}else if(direction == "left"){
			entity.angle -= speed;
		}
	}
		
}
		
function moveForward(entity, speed){
	entity.vx = speed * Math.cos(entity.angle * (Math.PI /180));
	entity.vy = speed * Math.sin(entity.angle * (Math.PI /180));
}	

function drawMultiple(context, array){
	for(var i = 0; i < array.length; i++){
		array[i].draw(context);
	}
}
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function centerText(context, text, offsetX, offsetY) {
	var w = context.measureText(text).width;
	var x = offsetX + (canvas.width / 2) - (w / 2) | 0;
	var y = offsetY | 0;
	context.fillText(text, x, y);
}

function drawOutline(context, entity) {
	context.strokeStyle = "white";
	context.strokeRect(entity.x, entity.y, entity.width, entity.height);
}

function keepOnScreen(entity) {
	if (entity.x < 0) {
		entity.x = 0;
	}
	if (entity.x + entity.width > canvas.width) {
		entity.x = canvas.width - entity.width;
	}
	if (entity.y < 0) {
		entity.y = 0;
	}
	if (entity.y + entity.height > canvas.height) {
		entity.y = canvas.height - entity.height;
	}
}

function center(axis, sprite){
	if(axis == "x"){
		return (canvas.width/2) - (sprite.width/2);
	}else{
		return (canvas.height/2) - (sprite.height/2);
	}
}