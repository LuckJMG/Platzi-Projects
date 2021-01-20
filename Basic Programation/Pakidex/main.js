
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

  speak(){ alert(this.name + "!"); };

  show()
  {
    document.body.appendChild(this.image);
    document.body.appendChild(
      "<p>" +
      "Name: " + this.name + "<br>" +
      "Life: " + this.life + "<br>" +
      "Power: " + this.power + "<br>" +
      "</p>"
    );
  };
};

// Build Pakiman objects
var cauchin = new Pakiman("Cauchin", 100, 30, "images/cauchin.png");
var pokacho = new Pakiman("Pokacho", 80, 50, "images/pokacho.png");
var tocinauro = new Pakiman("Tocinauro", 120, 40, "images/tocinauro.png");
