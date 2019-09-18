
var shape = {
	x: 40,
	y: 40,
	dx: 0,
	dy: 0
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


document.addEventListener('keydown', function(keyPressed) {
  switch (keyPressed.which)
  {
    case 37: // left arrow key
    {}
    case 65: // 'a' key
    {
      shape.dx = -1;
      shape.dy = 0;
      break;
    }

    case 38: // up arrow key
    {}
    case 87: // 'w' key
    {
      shape.dx = 0;
      shape.dy = -1;
      break;
    }

    case 39: // down arrow key
    {}
    case 68: // 's' key
    {
      shape.dx = 1;
      shape.dy = 0;
      break;
    }

    case 40: // right arrow key
    {}
    case 83: // 'd' key
    {
      shape.dx = 0;
      shape.dy = 1;
      break;
    }
  }
});

function loop() {
  requestAnimationFrame(loop);
  

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  shape.x = shape.x + shape.dx;
  shape.y = shape.y + shape.dy;
  
  drawShape();

}

function drawShape(){
	ctx.fillStyle = 'red';
	ctx.fillRect(shape.x, shape.y, 10, 10);
}

requestAnimationFrame(loop);
