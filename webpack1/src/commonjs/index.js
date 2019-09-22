var add = require('./src/add');

function calculator(num1, num2) {
    var result = add(num1, num2);
    console.log(result)
    return result;
}

calculator(3, 5)