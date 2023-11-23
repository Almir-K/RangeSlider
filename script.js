const slider = document.getElementById("myRange");
const output = document.querySelector(".value");

function updateValuePosition() {
  const thumbSize = 25; // Adjust this value based on thumb size
  const thumbPosition =
    ((slider.value - slider.min) / (slider.max - slider.min)) *
    (slider.offsetWidth - thumbSize);
  output.textContent = slider.value;
  output.style.left = `calc(${thumbPosition}px - 10px)`; // Adjust left position for better centering
  output.classList.add("active");

  // Remove the 'active' class after a delay to hide the value indicator
  setTimeout(() => {
    output.classList.remove("active");
  }, 1000);
}

slider.addEventListener("input", updateValuePosition);

// Initial positioning of the value indicator
updateValuePosition();
