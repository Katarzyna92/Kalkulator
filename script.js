function count(operator) {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    switch (operator) {
        case '+':
            var result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            var result = parseFloat(number1) - parseFloat(number2);
            break;
        case 'x':
            var result = parseFloat(number1) * parseFloat(number2);
            break;
        case '/':
            var result = parseFloat(number1) / parseFloat(number2);
            break;
    }

    document.getElementById('result').value = '= ' + result;
}