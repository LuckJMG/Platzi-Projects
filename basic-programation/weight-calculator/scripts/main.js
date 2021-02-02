// Import
import { CelestialBody } from './classCelestialBody.js'

// Get values
const btnCalculate = document.getElementById('btnCalculate')
const result = document.getElementById('result')
let weight
let gravity

// Declare variables
const celestialBody = []
celestialBody.push(new CelestialBody('The Sun', 274))
celestialBody.push(new CelestialBody('Mercury', 3.7))
celestialBody.push(new CelestialBody('Venus', 8.87))
celestialBody.push(new CelestialBody('The Moon', 1.67))
celestialBody.push(new CelestialBody('Mars', 3.7))
celestialBody.push(new CelestialBody('Jupiter', 24.8))
celestialBody.push(new CelestialBody('Saturn', 10.44))
celestialBody.push(new CelestialBody('Uranus', 8.7))
celestialBody.push(new CelestialBody('Neptune', 11.15))
celestialBody.push(new CelestialBody('Pluton', 0.62))

// Declare function
const calculateWeight = () => {
  // Clear
  result.innerHTML = ''

  // Get weight & gravity
  weight = document.getElementById('weight')
  weight = parseInt(weight.value)
  gravity = document.getElementById('gravity')
  gravity = parseInt(gravity.value)

  // Personalized gravity
  if (gravity >= 0) {
    celestialBody.splice(10)
    celestialBody.push(new CelestialBody('Personalized', gravity))
  }

  // Calculate & show weight
  if (weight >= 0) {
    celestialBody.forEach(body => {
      result.innerHTML += body.calculateWeight(weight)
    })
  }
}

// Declare addEventListeners
btnCalculate.addEventListener('click', calculateWeight)
