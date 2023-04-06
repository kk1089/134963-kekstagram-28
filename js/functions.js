// Полинддром
function palindrome(str) {
    str = str.toLowerCase().replace(/\s|[,.!?"/-]/g, "");
    return str.split('').reverse().join('') == str;
  }
  
 console.log(palindrome('1232'))
 
// Длина строки
function getLine (lineLenght, maxLenght) {
        if (lineLenght.length  <= maxLenght) {
        console.log(lineLenght.length)
        } else {
           console.log('The string cannot exceed ' + maxLenght + ' symbols' )}
        }
 //       