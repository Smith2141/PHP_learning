function check_character_case(ch) {
  // var ch = 'a';
  if (ch === ch.toUpperCase()) {
    return ch + ' >> Upper' ;
  } else {
    return ch + ' >> Lower';
  }
}

console.log(check_character_case('ЭТО ВЕРХНИЙ РЕГИСТР'));
console.log(check_character_case('а это нижний регистр'));
