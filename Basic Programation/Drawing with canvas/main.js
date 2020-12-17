// Get values
var draw_button = document.getElementById("draw_button");
var clear_button = document.getElementById("clear_button");
var curves_canvas = document.getElementById("curves_canvas").getContext("2d");
var keyboard_canvas = document.getElementById("keyboard_canvas").getContext("2d");

// Declare variables
const KEYS = {
	"LEFT" : 37,
	"UP" : 38,
	"RIGHT" : 39,
	"DOWN" : 40
};
var actual_x = 250;
var actual_y = 250;

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

// Draw curves_canvas function
function drawCurves()
{
	// Clear curves_canvas
	curves_canvas.clearRect(0, 0, 500, 500);

	// Get values
	let line_amount = parseInt(document.getElementById("line_amount").value);
	let checkbuttons = {
		top_left : document.getElementById("top_left").checked,
		top_right : document.getElementById("top_right").checked,
		bottom_left : document.getElementById("bottom_left").checked,
		bottom_right : document.getElementById("bottom_right").checked
	}
	let line_color_curves = document.getElementById("line_color_curves").value;

	// Declare variables
	let line_separation = 500 / line_amount;

	// Draw top left
	if(checkbuttons.top_left)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(curves_canvas, line_color_curves, 1, 0, (line_separation*tmp_line), (500 - line_separation*(tmp_line+1)), 0);
		}
	}

	// Draw top right
	if(checkbuttons.top_right)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(curves_canvas, line_color_curves, 1, 500, (line_separation*(tmp_line+1)), (line_separation*tmp_line), 0);
		}
	}

	// Draw bottom left
	if(checkbuttons.bottom_left)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(curves_canvas, line_color_curves, 1, 0, (line_separation*tmp_line), (line_separation*(tmp_line+1)), 500);
		}
	}

	// Draw bottom right
	if(checkbuttons.bottom_right)
	{
		for(let tmp_line = 0; tmp_line < line_amount; tmp_line++)
		{
			drawLine(curves_canvas, line_color_curves, 1, 500, (500-line_separation*(tmp_line+1)), (line_separation*tmp_line), 500);
		}
	}
}

function drawKeyboard(keyPress)
{
	// Get values
	let line_color_keyboard = document.getElementById("line_color_keyboard").value;
	let vector = parseInt(document.getElementById("line_length").value);

	switch (keyPress.keyCode) {
		case KEYS.LEFT: // Left arrow key case
			drawLine(keyboard_canvas, line_color_keyboard, 1, actual_x, actual_y, actual_x-vector, actual_y);
			if (actual_x > 0)
				actual_x -= vector;
		break;

		case KEYS.UP: // Up arrow key case
			drawLine(keyboard_canvas, line_color_keyboard, 1, actual_x, actual_y, actual_x, actual_y-vector);
			if (actual_y > 0)
				actual_y -= vector;
		break;

		case KEYS.RIGHT: // Right arrow key case
			drawLine(keyboard_canvas, line_color_keyboard, 1, actual_x, actual_y, actual_x+vector, actual_y);
			if (actual_x < 500)
				actual_x += vector;
		break;

		case KEYS.DOWN: // Down arrow key case\\\
			drawLine(keyboard_canvas, line_color_keyboard, 1, actual_x, actual_y, actual_x, actual_y+vector);
			if (actual_y < 500)
				actual_y += vector;
		break;
	}
}

// Draw container function for curves canvas
function drawContainerCurves()
{
	drawLine(curves_canvas, "black", 1, 1, 1, 499, 1);
	drawLine(curves_canvas, "black", 1, 1, 1, 1, 499);
	drawLine(curves_canvas, "black", 1, 499, 1, 499, 499);
	drawLine(curves_canvas, "black", 1, 1, 499, 499, 499);
}

// Draw container function for keyboard canvas
function drawContainerKeyboard()
{
	drawLine(keyboard_canvas, "black", 1, 1, 1, 499, 1);
	drawLine(keyboard_canvas, "black", 1, 1, 1, 1, 499);
	drawLine(keyboard_canvas, "black", 1, 499, 1, 499, 499);
	drawLine(keyboard_canvas, "black", 1, 1, 499, 499, 499);
}

function clearCanvas() {keyboard_canvas.clearRect(0, 0, 500, 500);}
function drawStart() {drawLine(keyboard_canvas, "red", 3, 249, 249, 251, 251);}

// Draw first lines
drawContainerCurves();
drawContainerKeyboard();
drawLine(keyboard_canvas, "red", 3, 249, 249, 251, 251); // Start point keyboard canvas

// Declare addEventListener
draw_button.addEventListener("click", drawCurves);
draw_button.addEventListener("click", drawContainerCurves);
document.addEventListener("mousedown", drawKeyboard);
clear_button.addEventListener("click", clearCanvas);
clear_button.addEventListener("click", drawContainerKeyboard);
clear_button.addEventListener("click", drawStart);
