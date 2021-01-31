// Core functions

/*
Button -> btn
Canvas -> cnv
Context -> ctx
Color -> clr
*/

// Draw a line function
function drawLine (canvas, color, lineWith, xStart, yStart, xEnd, yEnd) {
  canvas.beginPath()
  canvas.strokeStyle = color
  canvas.lineWidth = lineWith
  canvas.moveTo(xStart, yStart)
  canvas.lineTo(xEnd, yEnd)
  canvas.stroke()
  canvas.closePath()
}

// Draw container function
function drawContainer (canvas) {
  drawLine(canvas, 'black', 1, 1, 1, 499, 1)
  drawLine(canvas, 'black', 1, 1, 1, 1, 499)
  drawLine(canvas, 'black', 1, 499, 1, 499, 499)
  drawLine(canvas, 'black', 1, 1, 499, 499, 499)
}

// Export core functions
export { drawLine, drawContainer }
