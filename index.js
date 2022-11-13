
//1
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let quantity = 0;
const sum = arrNumbers.reduce((accum, number) => {
    if (number > 0) {
    quantity ++;
    accum +=number;
        }
    return accum;
}, 0);
console.log(sum);
console.log(quantity);

//2
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let minNumber = arrNumbers.reduce((accum, number) => {
    if (accum < number) {
        return accum;
    }
    return number;
}, 0);
console.log(`Min: ${minNumber} Position: ${arrNumbers.indexOf(minNumber)+ 1}` );

//3
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let maxNumber = arrNumbers.reduce((accum, number) => {
    if (accum > number) {
        return accum;
    }
    return number;
}, 0);
console.log(`Max: ${maxNumber} Position: ${arrNumbers.indexOf(maxNumber)+ 1}` );

//4
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let quantityNegative = 0;
    arrNumbers.reduce((accum, number) => {
    if (number < 0) {
        quantityNegative ++;
        accum +=number;
    }
    return accum;
}, 0);
console.log(quantityNegative);

//5
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let quantityOdd = 0;
    arrNumbers.reduce((accum, number) => {
    if (number > 0 && number % 2 === 1) {
        quantityOdd ++;
        accum +=number;
    }
    return accum;
}, 0);
console.log(quantityOdd);

//6
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let quantityEven = 0;
arrNumbers.reduce((accum, number) => {
    if (number > 0 && number % 2 === 0) {
        quantityEven ++;
        accum +=number;
    }
    return accum;
}, 0);
console.log(quantityEven);

//7
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let sumEven = 0;
arrNumbers.reduce((accum, number) => {
    if (number > 0 && number % 2 === 0) {
        sumEven = accum + number;
        accum +=number;
    }
    return accum;
}, 0);
console.log(sumEven);

//8
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let sumOdd = 0;
arrNumbers.reduce((accum, number) => {
    if (number > 0 && number % 2 === 1) {
        sumOdd = accum + number;
        accum +=number;
    }
    return accum;
}, 0);
console.log(sumOdd);

//9
const arrNumbers = [16,-37, 54, -4, 72,-56, 47, 4, -16, 25, -37, 46, 4, -51, 27,-63,4,-54,76,-4,12,-35,4,47];
let productPositive = arrNumbers.reduce((accum, number) => {
    if (number > 0) {
        accum *= number;
    }
    return accum;
}, 1);
console.log(productPositive);

//10
const arrayMax = arrNumbers.slice(0);
const elementMax = Math.max(...arrayMax);
let resultOtherElement = arrayMax.map((element) => {
    return element !== elementMax ? 0 : element;
})
console.log(resultOtherElement);
