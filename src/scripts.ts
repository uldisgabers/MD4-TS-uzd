// Task 1
// Write a function that takes two numbers (a and b) as argument
// Subtract b from a

const add = (a: number, b: number): number => a + b;

console.log(add(1, 2)); // 3
console.log(add(1, 10)); // 11
console.log(add(99, 1)); // 100

// Task 2
// Write a function that takes a value as argument
// Return the type of the value

const getType = (value:any): string => {
    return typeof value;
}

console.log(getType(1)) // number
console.log(getType(false)) // boolean
console.log(getType({})) // object
console.log(getType(null)) // object
console.log(getType('string')) // string
console.log(getType(['array'])) // object

// Task 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const checkEqual = (a: any, b: any): boolean => {
    return a == b && typeof a == typeof b;
}

console.log(checkEqual(2, 3)) // false
console.log(checkEqual(3, 3)) // true
console.log(checkEqual(1, '1')) // false
console.log(checkEqual('10', '10')) // true

// Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const whatChar = (a: string, b: number): string => {
    return a[b - 1];
}

console.log(whatChar('abcd', 1)) // a
console.log(whatChar('zyxbwpl', 5)) // w
console.log(whatChar('gfedcba', 3)) // e

// Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeChars = (a: string): string => {
    return a.slice(3);
}

console.log(removeChars('abcdefg')) // defg
console.log(removeChars('1234')) // 4
console.log(removeChars('fgedcba')) // dcba

// Task 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
 
const lastThree = (a: string): string => {
    return a.slice(-3);
}

console.log(lastThree('abcdefg')) // efg
console.log(lastThree('1234')) // 234
console.log(lastThree('fgedcba')) // cba

// Task 7 
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const firstThree = (a: string): string => {
    return  a.slice(0, 3);
}

console.log(firstThree('abcdefg')) // abc
console.log(firstThree('1234')) // 123
console.log(firstThree('fgedcba')) // fge

// Task 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const firstHalf = (a: string): string => {
    return a.slice(0, a.length / 2)
}

console.log(firstHalf('abcdefgh')) // abcd
console.log(firstHalf('1234')) // 12
console.log(firstHalf('gedcba')) // ged

// Task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLastThree = (a: string): string => {
    return a.slice(0, -3);
}

console.log(removeLastThree('abcdefg')) // abcd
console.log(removeLastThree('1234')) // 1
console.log(removeLastThree('fgedcba')) // fged

// Task 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const whatPercent = (a: number, b: number): number => {
    return b / 100 * a;
}

console.log(whatPercent(100, 50)) // 50
console.log(whatPercent(10, 1)) // 0.1
console.log(whatPercent(500, 25)) // 125

// Task 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const bigCalc = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    return Math.pow(((a + b - c) * d / e), f)
}

console.log(bigCalc(6,5,4,3,2,1)) // 10.5
console.log(bigCalc(6,2,1,4,2,3)) // 2744
console.log(bigCalc(2,3,6,4,2,3)) // -8

// Task 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (a: number): boolean => {
    if (a % 2 == 0) {
        return true;
    } return false;
}

console.log(isEven(10)); // true
console.log(isEven(-4)); // true
console.log(isEven(5)); // false
console.log(isEven(-111)); // false

// Task 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const timesOccurs = (a: string, b: string): number => {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (a == b[i]) {
            count++;
        }
    }
    return count;
}

console.log(timesOccurs('m', 'how many times does the character occur in this sentence?')) // 2
console.log(timesOccurs('h', 'how many times does the character occur in this sentence?')) // 4
console.log(timesOccurs('?', 'how many times does the character occur in this sentence?')) // 1
console.log(timesOccurs('z', 'how many times does the character occur in this sentence?')) // 0

// Task 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isWhole = (a: number): boolean => {
    return a === Math.floor(a);
}

console.log(isWhole(4)) // true
console.log(isWhole(1.123)) // false
console.log(isWhole(1048)) // true
console.log(isWhole(10.48)) // flase

// Task 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const divideOrMultiply = (a: number, b: number): number => {
    if(a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

console.log(divideOrMultiply(10, 100)) // 0.1
console.log(divideOrMultiply(90, 45)) // 4050
console.log(divideOrMultiply(8, 20)) // 0.4
console.log(divideOrMultiply(2, 0.5)) // 1

// Task 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const frontOrEnd = (a: string, b: string): string => {
    if (a.includes(b)) {
        return b + a;
      } else {
        return a + b;
    }
}

console.log(frontOrEnd('cheese', 'cake')) // cheesecake
console.log(frontOrEnd('lips', 's')) // slips
console.log(frontOrEnd('Java', 'script')) // Javascript
console.log(frontOrEnd(' think, therefore I am', 'I')) // 'I think, therefore I am

// Task 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundANumber = (a: number): number => {
    return Number(a.toFixed(2));
}

console.log(roundANumber((2.12397))) // 2.12
console.log(roundANumber((3.136))) // 3.14
console.log(roundANumber((1.12397))) // 1.12
console.log(roundANumber((26.1379))) // 26.14

// Task 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const numberSplit = (a: number) => {
    let arr = [];
    let aAsString: string = a.toString();
    for (let i = 0; i < aAsString.length; i++) {
        arr.push(aAsString[i])
    }
    return arr;
}

console.log(numberSplit(10)) // [1,0]
console.log(numberSplit(931)) // [9,3,1]
console.log(numberSplit(193278)) // [1,9,3,2,7,8]

// Task 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const clearTheChaos = (a: string, b: string): string => {
    let str = a.charAt(0).toUpperCase() + a.slice(1) + [...b].reverse().join("")
    return str.replace("%","");
}

console.log(clearTheChaos('java', 'tpi%rcs')) // Javascript
console.log(clearTheChaos('c%ountry', 'edis')) // Countryside
console.log(clearTheChaos('down', 'nw%ot')) // Downtown

// Task 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const isPrime = (a: number) => {

    for(let i = 2; i < a; i++) {
        if(a % i == 0) {
        return false }
      } return true
    }

const findNextPrime = (a: number) => {
    if(isPrime(a) == true) {
        return a;
    } else {
        while (true) {
            a++;
            if (isPrime(a)) {
                return a;
            }
        }
    }
}

console.log(findNextPrime(38)) // 41
console.log(findNextPrime(7)) // 7
console.log(findNextPrime(115)) // 127
console.log(findNextPrime(2000)) // 2003

// Task 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const areTheyDevisible = (x: number, y: number): number => { 
    for(let i = 0; i <= y; i++) {
        if(x % y == 0) {
            return x
        } else {
            x++;
        }
    }
}

console.log(areTheyDevisible(1, 23)) // 23
console.log(areTheyDevisible(23, 23)) // 23
console.log(areTheyDevisible(7, 3)) // 9
console.log(areTheyDevisible(-5, 7)) // 0

// Task 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertString = (a: string, b: string) => {
    let finalString = a.split("");
    for (let i = a.length - 3; i >= 0; i -= 3) {
        finalString.splice(i, 0, b)
    }
    return finalString.join("");
}

console.log(insertString('1234567','.')) // 1.234.567
console.log(insertString('abcde','$')) // ab$cde
console.log(insertString('zxyzxyzxyzxyzxyz','w')) // zwxyzwxyzwxyzwxyzwxyz

// Task 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const incrementToAlphabet = (a: string) => {
    let newStr = [];
    let endStr = [];
    for (let i = 0; i < a.length; i++) {
        newStr.push((a.charCodeAt(i)) + 1)
        endStr.push(String.fromCharCode(newStr[i]))
    }
    return endStr.join("")
}

console.log(incrementToAlphabet('bnchmf')) // coding
console.log(incrementToAlphabet('bgddrd')) // cheese
console.log(incrementToAlphabet('sdrshmf')) // testing

// Task 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const nthElement = (a: number[], n: number): number => {
    return a[n - 1];
}

console.log(nthElement([1,2,3,4,5],3)) // 3
console.log(nthElement([10,9,8,7,6],5)) // 6
console.log(nthElement([7,2,1,6,3],1)) // 7

// Task 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThree = (a: number[]) => {
    return a.slice(3)
}

console.log(removeFirstThree([1,2,3,4])) // [4]
console.log(removeFirstThree([5,4,3,2,1,0])) // [2,1,0]
console.log(removeFirstThree([99,1,1])) // []

// Task 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const extractLastThree = (a: number[]) => {
    return a.slice(-3);
}

console.log(extractLastThree([1,2,3,4])) // [2,3,4]
console.log(extractLastThree([5,4,3,2,1,0])) // [2,1,0]
console.log(extractLastThree([99,1,1])) // [99,1,1]

// Task 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const extractFirstThree = (a: number[]) => {
    return a.slice(0, 3);
}

console.log(extractFirstThree([1,2,3,4])) // [1,2,3]
console.log(extractFirstThree([5,4,3,2,1,0])) // [5,4,3]
console.log(extractFirstThree([99,1,1])) // [99,1,1]

// Task 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastNElements = (a: number[], n: number) => {
    return a.slice(-n);
}

console.log(lastNElements([1, 2, 3, 4, 5], 2)) // [ 4, 5 ]
console.log(lastNElements([1, 2, 3], 6)) // [ 1, 2, 3 ]
console.log(lastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [ 6, 7, 8 ]

// Task 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const clearOccurences = (a: any[], b: any) => {
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b) {
            a.splice(i, 1)
        }
    }
    return a;
}

console.log(clearOccurences([1,2,3], 2)) // [1, 3]
console.log(clearOccurences([1,2,'2'], '2')) // [1, 2]
console.log(clearOccurences([false,'2',1], false)) // ['2', 1]
console.log(clearOccurences([1,2,'2',1], 1)) // [2, '2']

// Task 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const numberOfElements = (a: any[]) => {
    return a.length;
}
 
console.log(numberOfElements([1,2,2,4])) // 4
console.log(numberOfElements([9,9,9])) // 3
console.log(numberOfElements([4,3,2,1,0])) // 5

// Task 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
