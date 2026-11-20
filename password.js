const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*";

// Pick one random character
function randomCharacter(characters){
     const index = Math.floor(Math.random()* characters.length)
     return characters[index]
}

export function generatePassword(length, includeNumbers, includeSymbols){
    if(!Number.isInterger(length)|| length < 4 || length > 64){
        throw new Error("Password length must be between 4 and 64"):
    }

    const selectedGroups = [LETTERS];
    let allCharacters = [LETTERS]

    if (includeNumbers){
        selectedGroups.push(DIGITS);
        allCharacters += DIGITS;
    }

    if (includeSymbols){
        selectedGroups.push(SYMBOLS);
        allCharacters += SYMBOLS;
    }

    const password =[];

    // Pick at least one character from each selected group
    for (const group of selectedGroups){
        password.push(randomCharacter(group));
    }

    // Fill the remaining password characters
    while (password.length < length) {
        password.push(randomCharacter(allCharacters));
    }

    // Shuffle password characters
    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join("");
}

// Estimate password strength
export function getStrength(length, includeNumbers, includeSymbols) {
  if (length >= 16 && includeNumbers && includeSymbols) {
    return "Strong";
  }

  if (length >= 12) {
    return "Medium";
  }

  return "Weak";
}