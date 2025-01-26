function changeMode(size, weight, trasform, background, color) {
    // This function returns another function that will apply the styles
    // The inner function "closes over" the style parameters, remembering them
    return function() {
        // Get access to the entire page through document.body
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = trasform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    // First, create our three theme variations using closure
    // Each of these variables will store a function that "remembers" its specific styles
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add the welcome paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Create and add the theme buttons

    // Spooky button:
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.onclick = spooky;  // When clicked, trigger the spooky theme closure
    document.body.appendChild(spookyButton);

    // Dark mode button
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.onclick = darkMode;  // When clicked, trigger the dark mode closure
    document.body.appendChild(darkModeButton);

    // Scream mode button
    const screamButton = document.createElement('button');
    screamButton.textContent = 'Scream mode';
    screamButton.onclick = screamMode;  // When clicked, trigger the scream mode closure
    document.body.appendChild(screamButton);

}

// Start everything by calling main
window.onload = main;


/*
The magic happens because each theme closure keeps its own independent copy of the style values in its "backpack" (closure scope). When you click a button, it's like opening that backpack and applying those specific styles to the page.
*/