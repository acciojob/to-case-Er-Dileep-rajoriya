function toCase(text) {
    // Check if the input string is empty
    if (text.length === 0) {
        return '-'; // Return '-' for an empty string
    }

    // Convert the text to lowercase and uppercase
    const lowerCaseText = text.toLowerCase();
    const upperCaseText = text.toUpperCase();

    // Return the formatted string
    return `${lowerCaseText}-${upperCaseText}`;
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
