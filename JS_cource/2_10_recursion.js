function my_function(n) {
    if (n===1) {
      return 1;
    } else {
      return my_function(n - 1) + ' ' + n;
    }
}

console.log(my_function(10));

/*
Рецензирование:
Решено с использованием рекурсии.

Сам пришел  к такому же решению, только проверял
(n===1), вроде так правильней.
Удачи!
*/
