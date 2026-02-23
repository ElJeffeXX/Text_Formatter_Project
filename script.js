// Get references to DOM elements
const textarea = document.getElementById('inputText');
const output = document.getElementById('output');
const charCount = document.getElementById('charCount');

// Function 1: Convert Text to Uppercase
function toUppercase() {
    const text = textarea.value;
    const result = text.toUpperCase();
    output.textContent = result;
    updateCharCount(result);
}

// Function 2: Convert Text to Lowercase
function toLowercase() {
    const text = textarea.value;
    const result = text.toLowerCase();
    output.textContent = result;
    updateCharCount(result);
}

// Function 3: Capitalize Each Word
function capitalizeWords() {
    const text = textarea.value;
    const words = text.split(' ');
    const capitalized = words.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    const result = capitalized.join(' ');
    output.textContent = result;
    updateCharCount(result);
}

// Function 4: Remove Extra Spaces
function removeExtraSpaces() {
    const text = textarea.value;
    const result = text.trim().replace(/\s+/g, ' ');
    output.textContent = result;
    updateCharCount(result);
}

// Function 5: Replace a Word
function replaceWord() {
    const text = textarea.value;
    const wordToReplace = prompt ('Enter the word to replace:');
    if (!wordToReplace) return;
    const replacement = prompt ('Enter the replacement word:');
    if (replacement === null) return;
    const regex = new RegExp(`\\b${wordToReplace}\\b`, 'g');
    const result = text.replace(regex, replacement);
    output.textContent = result;
    updateCharCount(result);
}

// Function 6: Count Characters
function countCharacters() {
    const text = output.textContent || textarea.value;
    updateCharCount(text);
}

// Helper: Update character count display
function updateCharCount(text) {
    charCount.textContent = `Character count: ${text.length}`;
}
