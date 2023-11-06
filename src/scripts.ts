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

