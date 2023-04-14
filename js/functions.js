// Полинддром 
function palindrome(str) {
  const newStr = str.toLowerCase().replace(/\s|[,.!?"/-]/g, "");
  return newStr.split('').reverse().join('') == str;
}


// Длина строки 
function checkStringLength(lineLength, maxLength) {

  if (lineLength.length <= maxLength) {
    return true
  } else {
    return false
  }
}
/* Функция, которая принимает строку,
 извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в 
 виде целого положительного числа. 
 Если в строке нет ни одной цифры, 
 функция должна вернуть NaN */
function fetchDigits(text) {
  let digits = '';

  for (let i = 0; i < text.length; i++) {

    if (!isNaN(text[i])) {
      const digit = parseInt(text[i], 10);
      digits += digit;
    }
  }

  return parseInt(digits, 10);
}

/*Функция, которая принимает три параметра: 
 исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку,
 дополненную указанными символами до заданной длины.
 Символы добавляются в начало строки.
 Если исходная строка превышает заданную длину,
 она не должна обрезаться.
 Если «добивка» слишком длинная, она обрезается с конца.  */
// Ничего не понятно, но очень интересно
function padString(originString, miniLength, addSymbols) {

  if (originString.length > miniLength) {

    return originString
  }
  let cyclesCount = miniLength - originString.length;
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
}