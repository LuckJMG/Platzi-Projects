// Create Pakiman class
class Pakiman
{
  constructor(name, life, power, image)
  {
    // Declare attributes
    this.name = name;
    this.life = life;
    this.power = power;
    this.image = new Image(); this.image.src = image
  };

  show()
  {
    document.body.appendChild(this.image);
    document.write(
      "<section>" +
      "<p>" +
      `<strong>${this.name}</strong><br>` +
      `Life: ${this.life}<br>` +
      `Power: ${this.power}<br>` +
      "</p>" +
      `<button id="${this.name}"> Speak! </button>` +
      "</section>"
    );
  };
};
