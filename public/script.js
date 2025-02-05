function toggleColor() {
    const button = document.getElementById('toggleButton');
    
    // Check the current color and toggle it
    if (button.style.backgroundColor === 'red') {
      button.style.backgroundColor = 'blue';
    } else {
      button.style.backgroundColor = 'red';
    }
  }
  