class Animal {
  constructor (src) {
    this.image = new window.Image()
    this.image.src = src
    this.amount = 0
    this.x = []
    this.y = []
  }
}

export { Animal }
