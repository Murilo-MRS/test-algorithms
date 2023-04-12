import ArrayFilter from './1-Test';
import MathOperations from './2-Test';
import RandomID from './3-Test';
console.time();
// 1 Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]
const test = new ArrayFilter(['a', 10, 'b', 'hola', 122, 15]);
console.group('1 - Algoritimo - ArrayFilter');
// a
console.log('1-a Array of string => ', test.arrayOfString);
// b
console.log('1-b Array of number => ', test.arrayOfNumber);
// c
console.log('1-c Highest Number in the array => ', test.highestNumber);
console.groupEnd();

// 2 - Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
const mathOperations = new MathOperations();
const arrayNumbers: number[] = [2, 3, 4];
console.group('2 - Algoritimo - Hashmap MathOperations');
// a
console.log('a - division must not allow 0 dividend => ', mathOperations.division(2,0));
// b
console.log('b - sum function => ', mathOperations.sum(arrayNumbers));
// c
console.log('c - subtraction function => ', mathOperations.subtraction(arrayNumbers));
// d
console.log('d - multiplication function => ', mathOperations.multiplication(arrayNumbers));
// e
console.log('e - division function => ', mathOperations.division(4, 3));
console.groupEnd();

// 3 - Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC
console.group('3 - Algoritimo - RandomID');
const randomID = new RandomID();
// a
console.log('a - random alphanumeric', randomID.id);
// b
console.log('b - default is a string', randomID.id);
// c
randomID.setRandomStringId();
console.log('c - stored in a variable', randomID);

console.groupEnd();
