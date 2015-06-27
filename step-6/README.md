### Intro to #GameDev using SplatJS
a SplatJS game tutorial by Alex Bezuska

http://codepen.io/AlexBezuska/pen/YXWwwE

#Step 6
- Keep the player from moving off screen with the keepOnScreen function

```
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
```
