// Import core functions
import { drawLine, drawContainer } from './main.js'

// Get values
const btnDraw = document.getElementById('btnDraw')
const cnvCurves = document.getElementById('cnvCurves')

// Declare variables
const ctxCurves = cnvCurves.getContext('2d')

drawContainer(ctxCurves) // Draw the cnvCurves container

// Draw ctxCurves function
function drawCurves () {
  // Clear ctxCurves
  ctxCurves.clearRect(0, 0, cnvCurves.width, cnvCurves.height)

  // Get values
  const checkbuttons = {
    topLeft: document.getElementById('topLeft').checked,
    topRight: document.getElementById('topRight').checked,
    botLeft: document.getElementById('botLeft').checked,
    botRight: document.getElementById('botRight').checked
  }
  let lineAmount = document.getElementById('lineAmount')
  let clrCurves = document.getElementById('clrCurves')

  // Declare variables
  lineAmount = parseInt(lineAmount.value)
  const lineSeparation = cnvCurves.width / lineAmount
  clrCurves = clrCurves.value

  // Draw top left
  if (checkbuttons.topLeft) {
    for (let tmpLine = 0; tmpLine < lineAmount; tmpLine++) {
      drawLine(
        ctxCurves, clrCurves, 1, 0, (lineSeparation * tmpLine),
        (cnvCurves.width - lineSeparation * (tmpLine + 1)), 0
      )
    }
  }

  // Draw top right
  if (checkbuttons.topRight) {
    for (let tmpLine = 0; tmpLine < lineAmount; tmpLine++) {
      drawLine(
        ctxCurves, clrCurves, 1, cnvCurves.width,
        (lineSeparation * (tmpLine + 1)), (lineSeparation * tmpLine), 0
      )
    }
  }
  // Draw bottom left
  if (checkbuttons.botLeft) {
    for (let tmpLine = 0; tmpLine < lineAmount; tmpLine++) {
      drawLine(
        ctxCurves, clrCurves, 1, 0, (lineSeparation * tmpLine),
        (lineSeparation * (tmpLine + 1)), cnvCurves.height
      )
    }
  }

  // Draw bottom right
  if (checkbuttons.botRight) {
    for (let tmpLine = 0; tmpLine < lineAmount; tmpLine++) {
      drawLine(
        ctxCurves, clrCurves, 1, cnvCurves.width,
        (cnvCurves.height - lineSeparation * (tmpLine + 1)),
        (lineSeparation * tmpLine), cnvCurves.height
      )
    }
  }
}

// Declare addEventListener
btnDraw.addEventListener('click', drawCurves)
btnDraw.addEventListener('click', function () { drawContainer(ctxCurves) })
