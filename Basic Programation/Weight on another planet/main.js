// Create Weight class
class CelestialBody
{
	constructor(name, gravity)
	{
		this.name = name;
		this.gravity = gravity;
	}
}

// Get values
var result = document.getElementById("result");

// Declare variables
var celestial_body = [];
celestial_body.push(new CelestialBody("The Sun", 274));
celestial_body.push(new CelestialBody("Mercury", 3.7));
celestial_body.push(new CelestialBody("Venus", 8.87));
celestial_body.push(new CelestialBody("The Moon", 1.67));
celestial_body.push(new CelestialBody("Mars", 3.7));
celestial_body.push(new CelestialBody("Jupiter", 24.8));
celestial_body.push(new CelestialBody("Saturn", 10.44));
celestial_body.push(new CelestialBody("Uranus", 8.7));
celestial_body.push(new CelestialBody("Neptune", 11.15));
celestial_body.push(new CelestialBody("Pluton", 0.62));
var weight;
var tmp_weight;
var gravity;

function calculate_weight()
{
	// Clear and get new values
	result.innerHTML = "";
	weight = parseInt(document.getElementById("weight").value);
	gravity = parseFloat(document.getElementById("gravity").value);

	for(var body of celestial_body)
	{
		// Calculate weight in the celestial body
		tmp_weight = ((weight * body.gravity) / 9.8).toFixed(2);

		//Show the result
		result.innerHTML += `${body.name}: ${tmp_weight} kg <br>`;
	}

	if (gravity >= 0)
	{
		// Calculate weight with personalized gravity
		tmp_weight = ((weight * gravity) / 9.8).toFixed(2);

		//Show the result
		result.innerHTML += `Personalized Gravity: ${tmp_weight} kg`;
	}
}

// Declare button
var button = document.getElementById("button");
button.addEventListener("click", calculate_weight);
