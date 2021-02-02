// Import
import { celestialBody } from './celestialBody.js'

// Get values
const btnCalculate = document.getElementById('btnCalculate')
const result = document.getElementById('result')

// Declare variables
const earthGravity = 9.8

// Calculate the weight n the celestial bodies
function calculateWeight () {
  // Reset values
  result.innerHTML = '<h2>Your weight on these celestial bodies is: </h2>'

  // Get values
  let weight = document.getElementById('weight')
  let gravity = document.getElementById('gravity')

  // Declare variables
  weight = parseInt(weight.value)
  gravity = parseFloat(gravity.value)
  let tmpWeight

  for (const body of celestialBody) {
    // Calculate weight in the celestial body
    tmpWeight = (weight * body.gravity) / earthGravity
    tmpWeight = tmpWeight.toFixed(2)

    // Show the result
    result.innerHTML += `${body.name}: ${tmpWeight} kg <br>`
  }

  if (gravity >= 0) {
    // Calculate weight with personalized gravity
    tmpWeight = (weight * gravity) / earthGravity
    tmpWeight = tmpWeight.toFixed(2)

    // Show the result
    result.innerHTML += `Personalized Gravity: ${tmpWeight} kg`
  }
}

// Declare addEventListeners
btnCalculate.addEventListener('click', function () {
  result.innerHTML = '' // Clear
  calculateWeight() // Write
})
