// Полинддром
function palindrome(str) {
    str = str.toLowerCase().replace(/\s|[,.!?"/-]/g, "");
    return str.split('').reverse().join('') == str;
  }
  
 console.log(palindrome('1232'))
 
// Длина строки
function lineLength(str) {
    str = 
}