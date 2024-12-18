const changeColor = document.getElementById('changeColor');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener to change background color
changeColor.addEventListener('click', function () {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
});
