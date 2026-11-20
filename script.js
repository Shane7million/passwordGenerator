import { generatePassword, getStrength } from "./password.js"

const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const strengthText = document.getElementById("strength");
const message = document.getElementById("message");

// Generate a password when the button is clicked.
generateBtn.addEventListener("click", () => {
  const length = Number(lengthInput.value);
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  try {
    const password = generatePassword(
      length,
      includeNumbers,
      includeSymbols
    );

    passwordInput.value = password;

    strengthText.textContent =
      "Strength: " + getStrength(
        length,
        includeNumbers,
        includeSymbols
      );

    message.textContent = "Password generated successfully!";
  } catch (error) {
    message.textContent = error.message;
  }
});

