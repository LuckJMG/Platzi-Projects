// Import
import { Animal } from './animal.js'

// Get values
const cnvTown = document.getElementById('cnvTown')
const btnReset = document.getElementById('btnReset')

// Declare variables
const ctxTown = cnvTown.getContext('2d')
const background = new window.Image()
background.src = './images/background.png'
const wolf = { x: 0, y: 0 }
wolf.image = new window.Image()
wolf.image.src = './images/wolf.png'
const chicken = new Animal('./images/chicken.png')
const cow = new Animal('./images/cow.png')
const pig = new Animal('./images/pig.png')

// Create function approx
function approx (number) {
  // Declare variables
  const decimal = parseInt(number.toString()[2])

  // Approx up or down
  if (decimal < 5) {
    number = Math.floor(number)
  } else {
    number = Math.ceil(number)
  }

  return number
}

// Create function random in a range of integers
function random (min, max) {
  // Declare variables
  let result = 0

  // Calculate random number in the range & return
  result = approx(Math.random() * (max - min + 1)) + min
  return result
}

function drawRandom () {
  // Declare variables
  const quantity = random(10, 20)
  let x = 0
  let y = 0
  wolf.x = random(0, 400)
  wolf.y = random(0, 400)

  // Draw background at start
  ctxTown.drawImage(background, 0, 0)

  // Draw animals in random numbers and random positions
  for (let i = 0; i < quantity; i++) {
    // Select random position
    x = random(0, 420)
    y = random(0, 420)

    // Select random animal
    switch (random(0, 3)) {
      case 1: // Case chicken
        chicken.x.push(x)
        chicken.y.push(y)
        chicken.amount++
        ctxTown.drawImage(chicken.image, x, y)
        break
      case 2: // Case cow
        cow.x.push(x)
        cow.y.push(y)
        ctxTown.drawImage(cow.image, x, y)
        cow.amount++
        break
      case 3: // Case pig
        pig.x.push(x)
        pig.y.push(y)
        pig.amount++
        ctxTown.drawImage(pig.image, x, y)
        break
    }

    // Draw player
    ctxTown.drawImage(wolf.image, wolf.x, wolf.y)
  }
}

function redraw () {
  // Clear previous frame
  ctxTown.clearRect(0, 0, 500, 500)

  // Redraw previous status
  ctxTown.drawImage(background, 0, 0)
  for (let i = 0; i < chicken.amount; i++) {
    ctxTown.drawImage(chicken.image, chicken.x[i], chicken.y[i])
  }
  for (let i = 0; i < cow.amount; i++) {
    ctxTown.drawImage(cow.image, cow.x[i], cow.y[i])
  }
  for (let i = 0; i < pig.amount; i++) {
    ctxTown.drawImage(pig.image, pig.x[i], pig.y[i])
  }
}

function movePlayer (keyPress) {
  // Declare variables
  const vector = 10

  // Move player
  switch (keyPress.key) {
    case 'ArrowLeft': // left arrow key case
      if (wolf.x >= 0) {
        wolf.x -= vector
        redraw()
        ctxTown.drawImage(wolf.image, wolf.x, wolf.y)
      }
      break

    case 'ArrowUp': // left arrow key case
      if (wolf.y >= -10) {
        wolf.y -= vector
        redraw()
        ctxTown.drawImage(wolf.image, wolf.x, wolf.y)
      }
      break

    case 'ArrowRight': // right arrow key case
      if (wolf.x <= 425) {
        wolf.x += vector
        redraw()
        ctxTown.drawImage(wolf.image, wolf.x, wolf.y)
      }
      break

    case 'ArrowDown': // down arrow key case
      if (wolf.y <= 425) {
        wolf.y += vector
        redraw()
        ctxTown.drawImage(wolf.image, wolf.x, wolf.y)
      }
      break
  }
}

// Add event listeners
background.addEventListener('load', drawRandom)
btnReset.addEventListener('click', function () { // Reset and save space
  ctxTown.clearRect(0, 0, 500, 500)
  chicken.x = []
  chicken.y = []
  cow.x = []
  cow.y = []
  pig.x = []
  pig.y = []
  drawRandom()
})
document.addEventListener('keydown', movePlayer)
