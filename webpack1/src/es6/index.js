import multiply, {add} from './src/index';

const calculator = (num1, num2) => {
    const result = add(num1, num2);
    const result2 = multiply(num1, num2);
    console.log(result, result2)
}

calculator(3, 5)