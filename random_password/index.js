function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars = `0123456789`;
    const symbolChars = `!@#$%^&*()_+-=`;

    let allowChars = ``;
    let password = ``;

    allowChars += includeLowercase ? lowercaseChars : ``;
    allowChars += includeUppercase ? uppercaseChars : ``;
    allowChars += includeNumbers ? numberChars : ``;
    allowChars += includeSymbols ? symbolChars : ``;

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }
    if (allowChars.length === 0) {
        return `(At least 1 set of character needs to be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomIndex];
    }

    return password;
}

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password ${password}`);
