// Create Weight class
class CelestialBody {
  constructor (name, gravity) {
    this.name = name
    this.gravity = gravity
  }
}

// Declare variables & objects
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

// Export
export { celestialBody }
