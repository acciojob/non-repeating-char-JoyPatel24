function firstNonRepeatedChar(str) {
 // Write your code here
	if (str.length === 0) {
		return null;
	}

	var charFrequency = {};

    // Iterate through the input string to count character frequencies
    for (var i = 0; i < str.length; i++) {
        var currentChar = str[i];
        charFrequency[currentChar] = (charFrequency[currentChar] || 0) + 1;
    }

    // Iterate through the input string to find the first non-repeated character
    for (var j = 0; j < str.length; j++) {
        if (charFrequency[str[j]] === 1) {
            return str[j];
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
