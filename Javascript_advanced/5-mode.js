function changeMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = `${size}px`;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    // Creating the different modes
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    // Adding a paragraph to the body
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
  
    // Creating buttons
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky; // Apply spooky mode on click
    document.body.appendChild(spookyButton);
  
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.onclick = darkMode; // Apply dark mode on click
    document.body.appendChild(darkModeButton);
  
    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.onclick = screamMode; // Apply scream mode on click
    document.body.appendChild(screamModeButton);
  }
  
  // Call the main function
  main();