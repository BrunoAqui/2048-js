//Setup game, canvas, track array.
const canvas = document.getElementById('canvas');
    
canvas.height = 500;
canvas.width = 500;

var gameArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

//Draw the house with margin of my tabletop - Maybe Change...
const Square = {
  margin: 10,

  drawAll: function(){
    for(let x = 0; x <= 3; x++){
      for(let y = 0; y <= 3; y++){
        let square = document.getElementById('canvas').getContext('2d');
        square.rect((x * 125), (y * 125), 125, 125);
        square.fillStyle = '#5791FF';
        square.fill();

        square.lineWidth = this.margin;
        square.strokeStyle = '#FFF64D';
        square.stroke();
        gameArray[x][y] = square;
      }
    }
  }
}
Square.drawAll();



























/*var raf;
var ctx = canvas.getContext('2d');

let ball = {
  x: 100,
  y: 100,
  vx: 10,
  vy: 0,

  draw: function() {
    ctx.fillStyle = "#5FE8B9";
    ctx.fillRect(this.x, this.y, 100, 100);
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
console.log(`x: `, window.innerWidth, ` y: `, window.innerHeight);*/