// Create Weight class
class CelestialBody {
  constructor (name, gravity) {
    this.earthGravity = 9.8
    this.name = name
    this.gravity = gravity
  }

  calculateWeight (weight) {
    weight = (weight * this.gravity) / this.earthGravity
    weight = weight.toFixed(2)
    weight = `<li>${this.name}: ${weight} kg</li>`

    return weight
  }
}

// Export
export { CelestialBody }
