// Get values
var canvas = document.getElementById("canvas");
var btn_reset = document.getElementById("btn_reset");

// Declare variables
const KEYS = {
	"LEFT" : 37,
	"UP" : 38,
	"RIGHT" : 39,
	"DOWN" : 40
};
var context = canvas.getContext("2d");
var background = new Image(); background.src = "images/background.png";
var chicken = {
  amount: 0,
  x: [],
  y: []
};
chicken.image = new Image(); chicken.image.src = "images/chicken.png";
var cow = {
  amount: 0,
  x: [],
  y: []
}
cow.image = new Image(); cow.image.src = "images/cow.png";
var pig = {
  amount: 0,
  x: [],
  y: []
};
pig.image = new Image(); pig.image.src = "images/pig.png";
var wolf = {
  x: 0,
  y: 0
};
wolf.image = new Image(); wolf.image.src = "images/wolf.png";

// Create function approx
function approx(number)
{
  // Declare variables
  let decimal = parseInt(number.toString()[2]);

  // Approx up or down
  if (decimal < 5)
  {
    number = Math.floor(number);
  }
  else
  {
    number = Math.ceil(number);
  }

  return number
}

// Create function random in a range of integers
function random(min, max)
{
  // Declare variables
  let result = 0;

  // Calculate random number in the range & return
  result = approx(Math.random() * (max - min + 1)) + min;
  return result;
}

function drawRandom()
{
  // Declare variables
  let quantity = random(10, 20);
  let x = 0;
  let y = 0;
  wolf.x = random(0, 400);
  wolf.y = random(0, 400);

  // Draw background at start
  context.drawImage(background, 0, 0);

  // Draw animals in random numbers and random positions
  for (let i = 0; i < quantity; i++) {
    // Select random position
    x = random(0, 420);
    y = random(0, 420);

    // Select random animal
    switch (random(0, 3)) {
      case 1: // Case chicken
        chicken.x.push(x); chicken.y.push(y);
        chicken.amount++;
        context.drawImage(chicken.image, x, y);
        break;
      case 2: // Case cow
        cow.x.push(x); cow.y.push(y);
        context.drawImage(cow.image, x, y);
        cow.amount++;
        break;
      case 3: // Case pig
        pig.x.push(x); pig.y.push(y);
        pig.amount++;
        context.drawImage(pig.image, x, y);
        break;
    };

  // Draw player
  context.drawImage(wolf.image, wolf.x, wolf.y);
  };
};

function redraw()
{
  // Clear previous frame
  context.clearRect(0, 0, 500, 500);

  // Redraw previous status
  context.drawImage(background, 0, 0);
  for (let i = 0; i < chicken.amount; i++) {
    context.drawImage(chicken.image, chicken.x[i], chicken.y[i]);
  }
  for (let i = 0; i < cow.amount; i++) {
    context.drawImage(cow.image, cow.x[i], cow.y[i]);
  }
  for (let i = 0; i < pig.amount; i++) {
    context.drawImage(pig.image, pig.x[i], pig.y[i]);
  }
}

function movePlayer(keyPress)
{
  // Declare variables
  let vector = 10;

  // Move player
  switch (keyPress.keyCode) {
    case KEYS.LEFT: // Left arrow key case
      if(wolf.x >= 0)
      {
        wolf.x -= vector;
        redraw();
        context.drawImage(wolf.image, wolf.x, wolf.y);
      };
      break;

    case KEYS.UP: // Left arrow key case
      if(wolf.y >= -10)
      {
        wolf.y -= vector;
        redraw();
        context.drawImage(wolf.image, wolf.x, wolf.y);
      };
      break;

    case KEYS.RIGHT: // Right arrow key case
      if(wolf.x <= 425)
      {
        wolf.x += vector;
        redraw();
        context.drawImage(wolf.image, wolf.x, wolf.y);
      };
      break;

    case KEYS.DOWN: // Down arrow key case
      if(wolf.y <= 425)
      {
        wolf.y += vector;
        redraw();
        context.drawImage(wolf.image, wolf.x, wolf.y);
      };
      break;
	}
}

// Add event listeners
background.addEventListener("load", drawRandom);
btn_reset.addEventListener("click", function(){ // Reset and save space
  context.clearRect(0, 0, 500, 500);
  chicken.x = []; chicken.y = [];
  cow.x = []; cow.y = [];
  pig.x = []; pig.y = [];
  drawRandom();
});
document.addEventListener("keydown", movePlayer);
