var person = {
  name : "Ivan",
  age : 25,
  hiredYear : 2017,
  sayAll: function() {
    for (let i in this) {
      if (typeof this[i] !== 'function') {
        console.log(i + " is " + typeof this[i]);
      }
    }
  }
}

// person.sayAll = function() {
//   for (let i in this) {
//     if (typeof this[i] !== 'function') {
//       console.log(i + " is " + typeof this[i]);
//     }
//   }
// }

person.sayAll();
// console.log(person.sayAll() + '<<');
