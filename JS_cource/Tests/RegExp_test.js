var myString = "This is just a test text";  // Задаем строку для поиска
var myPattern = /te|is/g;                   // Задаем шаблон - либо "te" либо "is"

result = myPattern.exec(myString);          
console.log(result);
result = myPattern.exec(myString);          
console.log(result);
result = myPattern.exec(myString);          
console.log(result);
result = myPattern.exec(myString);          
console.log(result);




//String methods:
//search, replace, match