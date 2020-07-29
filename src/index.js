// colors array
const colors = ["green", "red", "rgba(133,122,200)", "f15025"];

// button
const btn = document.getElementById("btn");

// color
const color = document.querySelector(".color");

// add EventListener
btn.addEventListener("click", function() {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// get a random whole number function
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
