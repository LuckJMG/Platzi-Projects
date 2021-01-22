// Build Pakiman objects
var pakimanes = [];
pakimanes.push(new Pakiman("Cauchin", 100, 30, "images/cauchin.png"));
pakimanes.push(new Pakiman("Pokacho", 80, 50, "images/pokacho.png"));
pakimanes.push(new Pakiman("Tocinauro", 120, 40, "images/tocinauro.png"));

// Show pakimanes
for (let pakiman of pakimanes)
{
  // Show information
  pakiman.show();

  // Speak button
  let button = document.getElementById(pakiman.name);
  button.addEventListener("click", function(){ alert(`${pakiman.name}!`) });
}
