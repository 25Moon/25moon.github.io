const buttons = Array.from(document.querySelectorAll('.bubble'));

// Loop through the array and add an event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let name = button.classList[1];
    button.classList.remove(name);

    // Optional: Force reflow to reset animation state
    void button.offsetWidth;

    button.classList.add(name);
    console.log(`Button ${index + 1} clicked: ${button.textContent}`);
  });
});
