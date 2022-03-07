//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  for (let letter of ALPHABET) {
    if (!string.includes(letter)
      && !string.includes(letter.toUpperCase())) return false
  }
  return true
};

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'