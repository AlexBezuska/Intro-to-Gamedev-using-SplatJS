### Intro to #GameDev using SplatJS
a SplatJS game tutorial by Alex Bezuska

http://codepen.io/AlexBezuska/pen/rVLxxO

#Step 5
- Add keyboard input to turn the player left and right
- rotation is in degrees

Rotate 1 degree per frame
```
if(game.keyboard.isPressed("left")){
		rotate(this.player, "left", 1);
	}

if(game.keyboard.isPressed("right")){
	rotate(this.player, "right", 1);
}
```
