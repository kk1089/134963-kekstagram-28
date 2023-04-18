
const isPalindrome = (str) => {
  const newStr = str.toLowerCase().replace(/\s|[,.!?"/-]/g, '');
  return newStr.split('').reverse().join('') === newStr;
};


function checkStringLength(lineLength, maxLength) {
  return lineLength.length <= maxLength;
}

const fetchDigits = (text) => {
  let digits = '';

  for (let i = 0; i < text.length; i++) {
    if (!isNaN(text[i])) {
      const digit = parseInt(text[i], 10);
      digits += digit;
    }
  }

  return parseInt(digits, 10);
};

const padString = (originString, miniLength, addSymbols) => {
  if (originString.length > miniLength) {
    return originString;
  }
  const cyclesCount = miniLength - originString.length;
  let j = 0;
  let textBegin = '';

  for (let i = 0; i < cyclesCount; i++) {
    textBegin = textBegin + addSymbols[j];

    if (j < addSymbols.length - 1) {
      j++;
    } else {
      originString = textBegin + originString;
      j = 0;
      textBegin = '';
    }
  }
  return textBegin + originString;
};
