// Import core functions
import { drawLine, drawContainer } from './main.js'

// Get values
const cnvKeyboard = document.getElementById('cnvKeyboard')
const btnClearKeyboard = document.getElementById('btnClearKeyboard')

// Declare variables
const ctxKeyboard = cnvKeyboard.getContext('2d')
const map = {
  ArrowLeft: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false
}
let xActual = cnvKeyboard.width / 2
let yActual = cnvKeyboard.height / 2

// Draw start lines
drawContainer(ctxKeyboard) // Container
drawLine(ctxKeyboard, 'red', 3, 249, 249, 251, 251) // Start point

// Draw with arrows
document.onkeydown = document.onkeyup = function (key) {
  // Get values
  let clrKeyboard = document.getElementById('clrKeyboard')
  let vector = document.getElementById('lineLengthKeyboard')

  // Declare variables
  map[key.key] = key.type === 'keydown'
  clrKeyboard = clrKeyboard.value
  vector = parseInt(vector.value)

  // Draw according cases
  if (map.ArrowLeft && map.ArrowUp) {
    drawLine( // Draw line
      ctxKeyboard, clrKeyboard, 1, xActual, yActual, xActual - vector,
      yActual - vector
    )
    if (xActual > 0 && yActual > 0) { // Don't surpass limits
      xActual -= vector
      yActual -= vector
    }
  } else if (map.ArrowLeft && map.ArrowDown) {
    drawLine(
      ctxKeyboard, clrKeyboard, 1, xActual, yActual, xActual - vector,
      yActual + vector
    )
    if (xActual > 0 && yActual < cnvKeyboard.height) {
      xActual -= vector
      yActual += vector
    }
  } else if (map.ArrowRight && map.ArrowUp) {
    drawLine(
      ctxKeyboard, clrKeyboard, 1, xActual, yActual, xActual + vector,
      yActual - vector
    )
    if (xActual < cnvKeyboard.width && yActual > 0) {
      xActual += vector
      yActual -= vector
    }
  } else if (map.ArrowRight && map.ArrowDown) {
    drawLine(
      ctxKeyboard, clrKeyboard, 1, xActual, yActual, xActual + vector,
      yActual + vector
    )
    if (xActual < cnvKeyboard.width && yActual < cnvKeyboard.width) {
      xActual += vector
      yActual += vector
    }
  } else if (map.ArrowLeft) {
    drawLine(
      ctxKeyboard, clrKeyboard, 1, xActual, yActual,
      xActual - vector, yActual
    )
    if (xActual > 0) { xActual -= vector }
  } else if (map.ArrowUp) {
    drawLine(
      ctxKeyboard, clrKeyboard, 1, xActual, yActual, xActual,
      yActual - vector
    )
    if (yActual > 0) { yActual -= vector }
  } else if (map.ArrowRight) {
    drawLine(
      ctxKeyboard, clrKeyboard, 1, xActual, yActual,
      xActual + vector, yActual
    )
    if (xActual < cnvKeyboard.width) { xActual += vector }
  } else if (map.ArrowDown) {
    drawLine(
      ctxKeyboard, clrKeyboard, 1, xActual, yActual, xActual,
      yActual + vector
    )
    if (yActual < cnvKeyboard.height) { yActual += vector }
  }
}

// Declare addEventListeners
document.addEventListener('keydown', function (e) {
  // Disable scroll with arrows
  if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) { e.preventDefault() }
}, false)

btnClearKeyboard.addEventListener('click', function () {
  // Restart canvas
  ctxKeyboard.clearRect(0, 0, 500, 500)
  drawContainer(ctxKeyboard)
  drawLine(ctxKeyboard, 'red', 3, 249, 249, 251, 251)
  xActual = cnvKeyboard.width / 2
  yActual = cnvKeyboard.height / 2
})
