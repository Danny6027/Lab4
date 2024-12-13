// Select all the drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Function to play sound based on the key/button pressed
function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log("Invalid key: " + key);
  }
}

// Function to animate button press
function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}

// Add event listeners for mouse clicks
for (const button of drumButtons) {
  button.addEventListener("click", function () {
    const buttonKey = this.innerHTML;
    playSound(buttonKey);
    buttonAnimation(buttonKey);
  });
}

// Add event listener for keyboard presses
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});
