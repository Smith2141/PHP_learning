function testCycle(number) {
    var result = 0;
    var string = number.toString();//преобразуем число в строку
    for (let item of string) {//перебор символов в строке
    result += Number(item);//преобразуем символ в число и суммируем к результату
    }
    return result;
}

// document.write(testCycle(0))
console.log(testCycle(25))

- отрицательные числа не упоминаются в условии задачи, как например и дробные,
соответственно большинство выложенных здесь решений такие числа тоже обрабатывать не будут,
а для отсечения лишних символов принципиально менять мой алгоритм не потребуется;
- о старомодности подходов судить пока не могу, но соглашусь что использование String()
более корректно, т.к. toString() это его частный случай;
- n=0 не возвращает Nan;
- согласен, что in в данном случае некорректно, вот скорректированный код:
