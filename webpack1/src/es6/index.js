import {add} from './src/index';

const calculator = (num1, num2) => {
    const result = add(num1, num2);
    console.log(result)
    return result;
}

calculator(3, 5)