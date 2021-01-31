// Import core functions
import { drawLine, drawContainer } from './main.js'

// Get values
const cnvMouse = document.getElementById('cnvMouse')
const btnClearMouse = document.getElementById('btnClearMouse')

// Declare variables
const ctxMouse = cnvMouse.getContext('2d')
let xMouse = 0
let yMouse = 0
let draw = false

// Draw cnvMouse container
drawContainer(ctxMouse)

// Press left button function
function mouseStart (mouseEvent) {
  draw = true
  xMouse = mouseEvent.offsetX
  yMouse = mouseEvent.offsetY
}

// Mouse movement function
function mouseDraw (mouseEvent) {
  if (draw === true) {
    let clrMouse = document.getElementById('clrMouse')
    clrMouse = clrMouse.value
    drawLine(
      ctxMouse, clrMouse, 1, xMouse, yMouse, mouseEvent.offsetX,
      mouseEvent.offsetY
    )
    xMouse = mouseEvent.offsetX
    yMouse = mouseEvent.offsetY
  }
}

// Stop pressing the left button function
function mouseEnd (mouseEvent) {
  let clrMouse = document.getElementById('clrMouse')
  if (draw === true) {
    clrMouse = clrMouse.value
    drawLine(
      ctxMouse, clrMouse, 1, xMouse, yMouse, mouseEvent.offsetX,
      mouseEvent.offsetY
    )
    xMouse = 0
    yMouse = 0
    draw = false
  }
}

// Mouse Canvas
cnvMouse.addEventListener('mousedown', mouseStart)
cnvMouse.addEventListener('mousemove', mouseDraw)
cnvMouse.addEventListener('mouseup', mouseEnd)
btnClearMouse.addEventListener('click', function () { // Restart mouse canvas
  ctxMouse.clearRect(0, 0, 500, 500)
  drawContainer(ctxMouse)
})
