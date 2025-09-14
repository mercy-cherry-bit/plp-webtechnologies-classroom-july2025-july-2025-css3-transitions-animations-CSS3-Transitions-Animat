// Global variable
let globalColor = "blue";

// Function with parameters and return value
function changeBoxColor(element, color) {
  element.style.backgroundColor = color;
  return `Color changed to ${color}`;
}

// Function demonstrating scope
function calculateArea(width, height) {
  let area = width * height; // Local variable
  return area;
}

// Reusable function to animate box
function triggerBoxAnimation() {
  const box = document.getElementById("animatedBox");
  box.classList.add("box");
}