// create color options for hex
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add Event Listener to listen for user clicks
btn.addEventListener("click", function() {
  let hexColor = "#"; // need the # for each hex color
  // for loop to generate random color (by using 6 array items)
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// create function to generate random number set
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
