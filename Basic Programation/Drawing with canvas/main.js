// Get values
// Buttons
var draw_button = document.getElementById("draw_button");
var clear_keyboard_button = document.getElementById("clear_keyboard_button");
var clear_mouse_button = document.getElementById("clear_mouse_button");

// Canvas
var curves_canvas = document.getElementById("curves_canvas");
var keyboard_canvas = document.getElementById("keyboard_canvas");
var mouse_canvas = document.getElementById("mouse_canvas");

// Declare variables
// Context
curves_context = curves_canvas.getContext("2d");
keyboard_context = keyboard_canvas.getContext("2d");
mouse_context = mouse_canvas.getContext("2d");

// Keyboard
const KEYS = {
	"LEFT" : 37,
	"UP" : 38,
	"RIGHT" : 39,
	"DOWN" : 40
};
var actual_x = 250;
var actual_y = 250;

// Mouse
var mouse_x = 0;
var mouse_y = 0;
var draw = false;

// Draw a line function
function drawLine(canvas, color, line_width, start_x, start_y, end_x, end_y)
{
	canvas.beginPath();
	canvas.strokeStyle = color;
	canvas.lineWidth = line_width;
	canvas.moveTo(start_x, start_y);
	canvas.lineTo(end_x, end_y);
	canvas.stroke();
	canvas.closePath();
}

// Draw curves_context function
function drawCurves()
{
	// Clear curves_context
	curves_context.clearRect(0, 0, 500, 500);

	// Get values
	let line_amount = document.getElementById("line_amount");
	let checkbuttons = {
		top_left : document.getElementById("top_left").checked,
		top_right : document.getElementById("top_right").checked,
		bottom_left : document.getElementById("bottom_left").checked,
		bottom_right : document.getElementById("bottom_right").checked
	}
	let line_color_curves = document.getElementById("line_color_curves");

  // Declare variables
  line_amount = parseInt(line_amount.value);
  line_color_curves = line_color_curves.value;
	let line_separation = 500 / line_amount;

	// Draw top left
	if(checkbuttons.top_left)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(
        curves_context, line_color_curves, 1, 0, (line_separation*tmp_line),
        (500 - line_separation*(tmp_line+1)), 0
        );
		}
	}

	// Draw top right
	if(checkbuttons.top_right)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(
        curves_context, line_color_curves, 1, 500,
        (line_separation*(tmp_line+1)), (line_separation*tmp_line), 0
        );
		}
	}

	// Draw bottom left
	if(checkbuttons.bottom_left)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(
        curves_context, line_color_curves, 1, 0, (line_separation*tmp_line),
        (line_separation*(tmp_line+1)), 500
        );
		}
	}

	// Draw bottom right
	if(checkbuttons.bottom_right)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(
        curves_context, line_color_curves, 1, 500,
        (500-line_separation*(tmp_line+1)), (line_separation*tmp_line), 500
        );
		}
	}
}

function drawKeyboard(keyPress)
{
	// Get values
	let line_color_keyboard = document.getElementById("line_color_keyboard");
	let vector = document.getElementById("line_length_keyboard");

  // Declare variables
  line_color_keyboard = line_color_keyboard.value;
  vector = parseInt(vector.value);

	switch (keyPress.keyCode) {
		case KEYS.LEFT: // Left arrow key case
			drawLine(
        keyboard_context, line_color_keyboard, 1, actual_x, actual_y,
        actual_x - vector, actual_y
        );
			if (actual_x > 0)
				actual_x -= vector;
		  break;

		case KEYS.UP: // Up arrow key case
			drawLine(
        keyboard_context, line_color_keyboard, 1, actual_x, actual_y, actual_x,
        actual_y - vector
        );
			if (actual_y > 0)
				actual_y -= vector;
		  break;

		case KEYS.RIGHT: // Right arrow key case
			drawLine(
        keyboard_context, line_color_keyboard, 1, actual_x, actual_y,
        actual_x + vector, actual_y
        );
			if (actual_x < 500)
				actual_x += vector;
		  break;

		case KEYS.DOWN: // Down arrow key case
			drawLine(
        keyboard_context, line_color_keyboard, 1, actual_x, actual_y, actual_x,
        actual_y + vector
        );
			if (actual_y < 500)
				actual_y += vector;
		  break;
	}
}

// Draw container function
function drawContainer(canvas)
{
	drawLine(canvas, "black", 1, 1, 1, 499, 1);
	drawLine(canvas, "black", 1, 1, 1, 1, 499);
	drawLine(canvas, "black", 1, 499, 1, 499, 499);
	drawLine(canvas, "black", 1, 1, 499, 499, 499);
}
// Draw first lines
drawContainer(curves_context);
drawContainer(keyboard_context);
drawContainer(mouse_context);

// Start point keyboard canvas
drawLine(keyboard_context, "red", 3, 249, 249, 251, 251);

// Declare addEventListener
// Curve canvas
draw_button.addEventListener("click", drawCurves);
draw_button.addEventListener("click", function(){
	drawContainer(curves_context)
});

// Keyboard canvas
document.addEventListener("keydown", drawKeyboard);
clear_keyboard_button.addEventListener("click", function(){ // Clear canvas
	keyboard_context.clearRect(0, 0, 500, 500);
});
clear_keyboard_button.addEventListener("click", function(){ // Container
	drawContainer(keyboard_context)
});
clear_keyboard_button.addEventListener("click", function(){ // Start Point
	drawLine(keyboard_context, "red", 3, 249, 249, 251, 251);
});

// Mouse Canvas
mouse_canvas.addEventListener("mousedown", mouseEvent => { // Case mousedown
  draw = true;
  mouse_x = mouseEvent.offsetX;
  mouse_y = mouseEvent.offsetY;
});
mouse_canvas.addEventListener("mousemove", mouseEvent => { // Case mousemove
  if (draw === true)
  {
    var line_color_mouse = document.getElementById("line_color_mouse");
    line_color_mouse = line_color_mouse.value;
    drawLine(
      mouse_context, line_color_mouse, 1, mouse_x, mouse_y, mouseEvent.offsetX,
      mouseEvent.offsetY
      );
    mouse_x = mouseEvent.offsetX;
    mouse_y = mouseEvent.offsetY;
  }
});
mouse_canvas.addEventListener("mouseup", mouseEvent => { // Case mouseup
  if (draw === true) {
    var line_color_mouse = document.getElementById("line_color_mouse");
    line_color_mouse = line_color_mouse.value;
    drawLine(
      mouse_context, line_color_mouse, 1, mouse_x, mouse_y, mouseEvent.offsetX,
      mouseEvent.offsetY
      );
    mouse_x = 0;
    mouse_y = 0;
    draw = false;
    }
});
clear_mouse_button.addEventListener("click", function(){ // Clear canvas
	mouse_context.clearRect(0, 0, 500, 500);
});
clear_mouse_button.addEventListener("click", function(){ // Container
	drawContainer(mouse_context)
});
