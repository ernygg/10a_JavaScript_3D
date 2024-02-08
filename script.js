var world = document.getElementById('world');

world.style.transform = `rotateX(78deg) rotateY(390deg) rotateZ(30deg)`;

let dir = "";

document.addEventListener("keydown", event =>{
	if(event.keyCode == 39 && dir != "left") {
		dir = "right"
	}
	if(event.keyCode == 37 && dir != "right") {
		dir = "left"
	}
	if(event.keyCode == 38 && dir != "down") {
		dir = "up"
	}
	if(event.keyCode == 40 && dir != "down") {
		dir = "down"
	}
}
);
if(dir == "right") {
    square += box;
}
if(dir == "left") {
    snakeX -= box;
}
if(dir == "up") {
    snakeY -= box;
}
if(dir == "down") {
    snakeY += box;
}