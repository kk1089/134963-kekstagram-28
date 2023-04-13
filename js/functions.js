// Полинддром (нашел в интернете легко и понятно)
function palindrome(str) {
    str = str.toLowerCase().replace(/\s|[,.!?"/-]/g, "");
    return str.split('').reverse().join('') == str;
  }
  /* .replase -  заменяет на то что в скобках
     .split - разбивает строку на массив
     .reverse - переворачивает массив
     .join обьединяет массив 
     == приравниеваем */
  
 console.log(palindrome('1232'))
 
// Длина строки (сдлелал сам, легко и понятно)
 function getLine (lineLenght, maxLenght) {
        if (lineLenght.length  <= maxLenght) {
        console.log(lineLenght.length)
        } else {
           console.log('The string cannot exceed ' + maxLenght + ' symbols' )}
        }
 /* Функция, которая принимает строку,
  извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в 
  виде целого положительного числа. 
  Если в строке нет ни одной цифры, 
  функция должна вернуть NaN (ничего не понятно)*/
  function fetchDigits(text) {
  let digits = '';
  for (let i = 0; i < text.length; i++) {
    if (!isNaN(parseInt(text[i], 10))) {
      digits += text[i];
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
  function formAddresString (originString, miniLength, addSymbols) {
   if (originString.length > miniLength) {
    return originString 
   }
   let cyclesCount = miniLength - originString.length;
   let j = 0;
   let textBegin = '';
   for (let i = 0; i < cyclesCount; i++) {
    textBegin = textBegin + addSymbols[j];
    
    if (j < addSymbols.length -1) {
      j++;
    } else {
      originString = textBegin + originString;
      j = 0;
      textBegin = '';
    }
            
   }
  return textBegin + originString;
}