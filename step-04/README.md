### Intro to #GameDev using SplatJS
a SplatJS game tutorial by Alex Bezuska

http://codepen.io/AlexBezuska/pen/WvxrQm

#Step 4
- Adding keyboard input to move the player forward and back
- set the speed to 0 every frame
- set a new speed when player pressed up or down

```
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
```
