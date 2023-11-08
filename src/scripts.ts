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

const howManyNegative = (a: number[]) => {
    let negativeValues = 0;
    for(let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            negativeValues++
        }
    }
    return negativeValues;
}

console.log(howManyNegative([1,-2,2,-4])) // 2
console.log(howManyNegative([0,9,1])) // 0
console.log(howManyNegative([4,-3,2,1,0])) // 1

// Task 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortMyArray = (arr: number[]) => {
    return arr.sort((a, b) => b - a);
}

console.log(sortMyArray([1,3,2])) // [3,2,1]
console.log(sortMyArray([4,2,3,1])) // [4,3,2,1]

// Task 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortAlphabetically = (arr: string[]) => {
    return arr.sort();
}

console.log(sortAlphabetically(['b', 'c', 'd', 'a'])) // ['a', 'b', 'c', 'd']
console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])) // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// Task 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const avarageOfNumbers = (arr: number[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length;
}

console.log(avarageOfNumbers([10,100,40])) // 50
console.log(avarageOfNumbers([10,100,1000])) // 370
console.log(avarageOfNumbers([-50,0,50,200])) // 50

// Task 35
// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (arr: string[]) => {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (longest.length < arr[i].length) {
            longest = arr[i]
        }
    }
    return longest;
}

console.log(longestString(['help', 'me'])) // help
console.log(longestString(['I', 'need', 'candy'])) // candy

// Task 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const areTheyEqual = (arr: any[]) => {
    let result = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1]) {
            return false
        }
    }
    return true;
}

console.log(areTheyEqual([true, true, true, true])) // true
console.log(areTheyEqual(['test', 'test', 'test'])) // true
console.log(areTheyEqual([1,1,1,2])) // false
console.log(areTheyEqual(['10',10,10,10])) // false

// Task 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const combineArrays = (...arr: any[]): any[] => {
    return [].concat(...arr);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]))
console.log(combineArrays(['a', 'b', 'c'], [4, 5, 6]))
console.log(combineArrays([true, true], [1, 2], ['a', 'b']))

// Task 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const sortArrayByProp = (arr: any[]) => {
    return arr.sort((a, b) => a.b - b.b);
}

console.log(sortArrayByProp([{a:1,b:2},{a:5,b:4}])) // [{a:1,b:2},{a:5,b:4}]
console.log(sortArrayByProp([{a:2,b:10},{a:5,b:4}])) // [{a:5,b:4},{a:2,b:10}]
console.log(sortArrayByProp([{a:1,b:7},{a:2,b:1}])) // [{a:2,b:1},{a:1,b:7}]

// Task 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeRemoveAndSort = (a: any[], b: any[]) => {   
    let sortedArr = a.concat(b).sort((a, b) => a - b)
    let endArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] != sortedArr[i-1]) {
            endArr.push(sortedArr[i])
        };
     }
     return endArr
}

console.log(mergeRemoveAndSort([1, 2, 3], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
console.log(mergeRemoveAndSort([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) // [ -11, -10, 5, 22, 41,  42, 333]

// Task 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumTheElementsGreater = (a: number[], b: number) => {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b) {
            result += a[i]
        }
    }
    return result;
}

console.log(sumTheElementsGreater([1, 2, 3, 4, 5, 6, 7], 2)) // 25
console.log(sumTheElementsGreater([-10, -11, -3, 1, -4], -3)) // 1
console.log(sumTheElementsGreater([78, 99, 100, 101, 401], 99)) // 602

// Task 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const fillTheRangeOfMinMax = (min: number, max: number): number[] => {
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i)
    }
    return result;
}

console.log(fillTheRangeOfMinMax(2, 10)) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(fillTheRangeOfMinMax(1, 3)) // [1, 2, 3]
console.log(fillTheRangeOfMinMax(-5, 5)) // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(fillTheRangeOfMinMax(2, 7)) // [2, 3, 4, 5, 6, 7]

// Task 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const groupInObjectByFirstName = (arr: any[]) => {
    let newObj: Record<string, string[]> = {};
    for (let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i][0].toLowerCase();
        if (newObj[firstLetter]) {
            newObj[firstLetter].push(arr[i]);
        } else {
            newObj[firstLetter] = [arr[i]];
        }
    }
    return newObj;
}

console.log(groupInObjectByFirstName(['Alf', 'Alice', 'Ben'])) // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupInObjectByFirstName(['Ant', 'Bear', 'Bird'])) // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupInObjectByFirstName(['Berlin', 'Paris', 'Prague'])) // { b: ['Berlin'], p: ['Paris', 'Prague']}

// Task 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const combineWithItSelfOrZero = (arr: any[], num: number) => {
    let newArr = [...arr];
    if (num < 6) {
        newArr.unshift(0)
    } else {
        newArr.unshift(num)
    }
    return newArr;
}

console.log(combineWithItSelfOrZero([1,2,3], 6)) // [6,1,2,3]
console.log(combineWithItSelfOrZero(['a','b'], 2)) // [0,'a','b']
console.log(combineWithItSelfOrZero([null,false], 11)) // [11,null,false]

// Task 44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const saveNthElements = (a: any[], n: number) => {
    let newArr = [];
    for (let i = n - 1; i < a.length; i += n) {
        newArr.push(a[i])
    }
    return newArr
}

console.log(saveNthElements([1,2,3,4,5,6,7,8,9,10],3)) // [3,6,9]
console.log(saveNthElements([10,9,8,7,6,5,4,3,2,1],5)) // [6,1]
console.log(saveNthElements([7,2,1,6,3,4,5,8,9,10],2)) // [2,6,4,8,10]

// Task 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const whatKeyisThisCountry = (obj: {country: string; continent: string}): string => {
    return obj.country;
}

console.log(whatKeyisThisCountry({  continent: 'Asia',  country: 'Japan'})) // Japan
console.log(whatKeyisThisCountry({  country: 'Sweden',  continent: 'Europe'})) // Sweden

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const whatIsUnderThisKey = (obj: Record<string, any>) => {
    return obj["prop-2"];
}

console.log(whatIsUnderThisKey({  one: 1,  'prop-2': 2})) // 2
console.log(whatIsUnderThisKey({  'prop-2': 'two',  prop: 'test'})) // two

// Task 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const valueOfTheGivenString = (obj: Record<string, any>, name: string) => {
    return obj[name];
}

console.log(valueOfTheGivenString({  continent: 'Asia',  country: 'Japan'}, 'continent')) // Asia
console.log(valueOfTheGivenString({  country: 'Sweden',  continent: 'Europe'}, 'country')) // Sweden

// Task 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const checkIfThereIsThisProp = (a: Record<any, any>, b: string) => {
    return a.hasOwnProperty(b);
}

console.log(checkIfThereIsThisProp({a:1,b:2,c:3},'b')) // true
console.log(checkIfThereIsThisProp({x:'a',y:'b',z:'c'},'a')) // false
console.log(checkIfThereIsThisProp({x:'a',y:'b',z:'c'},'z')) // true

// Task 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const createThisObjectWithKeyKey = (a: string) => {
    let newObj = {key: a}
    return newObj
}

console.log(createThisObjectWithKeyKey('a')) // {key:'a'}
console.log(createThisObjectWithKeyKey('z')) // {key:'z'}
console.log(createThisObjectWithKeyKey('b')) // {key:'b'}

// Task 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const createObjectFromTwoArguments = (a: string, b: string) => {
    return {a: b}
}

console.log(createObjectFromTwoArguments('a','b')) // {a:'b'}
console.log(createObjectFromTwoArguments('z','x')) // {z:'x'}
console.log(createObjectFromTwoArguments('b','w')) // {b:'w'}

// Task 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const createObjectWithCorresponding = (a: any[], b: any[]) => {
    let newObj: Record<string, any> = {}
    for (let i = 0; i < a.length; i++) {
        newObj[a[i]] = b[i];
    }
    return newObj;
}

console.log(createObjectWithCorresponding(['a','b','c'],[1,2,3])) // {a:1,b:2,c:3}
console.log(createObjectWithCorresponding(['w','x','y','z'],[10,9,5,2])) // {w:10,x:9,y:5,z:2}
console.log(createObjectWithCorresponding([1,'b'],['a',2])) // {1:'a',b:2}

// Task 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys

const whatAreTheKeys = (a: Record<any, any>) => {
    return Object.keys(a);
}

console.log(whatAreTheKeys({a:1,b:2,c:3})) // ['a','b','c']
console.log(whatAreTheKeys({j:9,i:2,x:3,z:4})) // ['j','i','x','z']
console.log(whatAreTheKeys({w:15,x:22,y:13})) // ['w','x','y']

// Task 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values

const sumOfObjectValues = (a: Record<string, number>) => {
    let result = 0;
    for (let i in a) {
        result += a[i]
    }
    return result;
}

console.log(sumOfObjectValues({a:1,b:2,c:3})) // 6
console.log(sumOfObjectValues({j:9,i:2,x:3,z:4})) // 18 
console.log(sumOfObjectValues({w:15,x:22,y:13})) // 50

// Task 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const takeOutTheBKey = (obj: Record<string, number>) => {
    let newObj = { ...obj };
    if (newObj.hasOwnProperty("b")) {
        delete newObj["b"];
    }
    return newObj;
}

console.log(takeOutTheBKey({ a: 1, b: 7, c: 3 })) // { a: 1, c: 3 }
console.log(takeOutTheBKey({ b: 0, a: 7, d: 8 })) // { a: 7, d: 8 }
console.log(takeOutTheBKey({ e: 6, f: 4, b: 5, a: 3 })) // { e: 6, f: 4, a: 3 }

// Task 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const combineObjectsAndReplace = (obj1: Record<string, number>, obj2: Record<string, number>) => {
    const finalObj: Record<string, number> = { ...obj1, ...obj2 };
    if ('b' in finalObj) {
        finalObj.d = finalObj.b;
        delete finalObj.b;
    }
    return finalObj;
}

console.log(combineObjectsAndReplace({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })) // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(combineObjectsAndReplace({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) // { a: 5, b: 4, c: 3, e: 2, d: 1}

// Task 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyAllObjValues = (obj: Record<string, number>, b: number) => {
    for (let i in obj) {
        obj[i] *= b;
    }
    return obj;
}

console.log(multiplyAllObjValues({a:1,b:2,c:3},3)) // {a:3,b:6,c:9}
console.log(multiplyAllObjValues({j:9,i:2,x:3,z:4},10)) // {j:90,i:20,x:30,z:40}
console.log(multiplyAllObjValues({w:15,x:22,y:13},6)) // {w:90,x:132,y:78}

// Task 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const switchObjectKeyForValue = (obj: Record<any, any>) => {
    let keys = [];
    let values = [];
    for (let i in obj) {
        keys.push(obj[i])
        values.push(i)
    }
    let newObj: Record<string, any> = {}
    for (let i = 0; i < keys.length; i++) {
        newObj[keys[i]] = values[i];
    }
    return newObj;
}

console.log(switchObjectKeyForValue({z:'a',y:'b',x:'c',w:'d'})) // {a:'z',b:'y',c:'x',d:'w'}
console.log(switchObjectKeyForValue({2:'a',4:'b',6:'c',8:'d'})) // {a:'2',b:'4',c:'6',d:'8'}
console.log(switchObjectKeyForValue({a:1,z:24})) // {1:'a',24:'z'}

// Task 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const replaceEmptyWithNull = (obj: Record<any, any>) => {
    for (let key in obj) {
        if (obj[key].trim() === "") {
            obj[key] = null;
        }
    }
    return obj;
}

console.log(replaceEmptyWithNull({ a: 'a', b: 'b', c: '' })) // { a: 'a', b: 'b', c: null }
console.log(replaceEmptyWithNull({ a: '', b: 'b', c: ' ', d: 'd' })) // { a: null, b: 'b', c: null, d: 'd' }
console.log(replaceEmptyWithNull({ a: 'a', b: 'b ', c: ' ', d: '' })) // { a: 'a', b: 'b ', c: null, d: null }

// Task 59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const extractObjectInfo = (obj: Record<any, any>) => {
    const result: Record<any, any> = {};

    if (obj.fn) {
        result.fn = obj.fn;
    }

    if (obj.ln) {
        result.ln = obj.ln;
    }

    if (obj.size) {
        result.size = `${obj.size}cm`;
    }

    if (obj.weight) {
        result.weight = `${obj.weight}kg`;
    }

    return result;
}
 console.log(extractObjectInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})) // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
 console.log(extractObjectInfo({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})) // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
 console.log(extractObjectInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})) // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
 console.log(extractObjectInfo({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})) // {fn: 'Matthew', ln: 'Müller'}

// Task 60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

const addContinentToObjects = (arr: any[], continent: string) => {
    let newArr = [];
    for (let obj of arr) {
        const newObj = { ...obj, continent };
        newArr.push(newObj);
    }
    return newArr;
}

console.log(addContinentToObjects([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'))
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinentToObjects([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'))
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// Task 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const arrayToObjectWithOccurances = (arr: number[]) => {
    const countObj: { [key: number]: number } = {};
    for (let num of arr) {
        if (countObj[num] === undefined) {
            countObj[num] = 1;
        } else {
            countObj[num]++;
        }
    }
    return countObj;
}

console.log(arrayToObjectWithOccurances([1,2,2,3])) // {1:1,2:2,3:1}
console.log(arrayToObjectWithOccurances([9,9,9,99])) // {9:3,99:1}
console.log(arrayToObjectWithOccurances([4,3,2,1])) // {1:1,2:1,3:1,4:1}

// Task 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const checkDatesAreEqual = (date1: Date, date2: Date): boolean => {
    return date1.getTime() === date2.getTime();
}

console.log(checkDatesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) // false
console.log(checkDatesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // true
console.log(checkDatesAreEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // false

// Task 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const howManyDaysBetween = (date1: Date, date2: Date): number => {
    let oneDay = 24 * 60 * 60 * 1000; 
    let diffDays = Math.abs(Math.round((date1.getTime() - date2.getTime()) / oneDay));
    return diffDays;
}

console.log(howManyDaysBetween(new Date('2020-06-11'), new Date('2020-06-01'))) // 10
console.log(howManyDaysBetween(new Date('2000-01-01'), new Date('2020-06-01'))) // 7457

// Task 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const datesOnSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

console.log(datesOnSameDay(new Date('2000/01/01'), new Date('2000/01/01'))) // true
console.log(datesOnSameDay(new Date('2000/01/01'), new Date('2000/01/02'))) // false
console.log(datesOnSameDay(new Date('2001/01/01'), new Date('2000/01/01'))) // false
console.log(datesOnSameDay(new Date('2000/11/01'), new Date('2000/01/01'))) // false

// Task 65
// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both arrays

const combineArraysWithSpread = (arr1: number[], arr2: number[]): number[] => {
    return [...arr1, ...arr2];
}

console.log(combineArraysWithSpread([1, 2], [3, 4])) // [1, 2, 3, 4]
console.log(combineArraysWithSpread([1, 2], [3, 4, 5, 6])) // [1, 2, 3, 4, 5, 6]
 
// Task 66
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

const combineArrayWithString = (arr1: string[], a: string): string[] => {
    return [...arr1, a];
}

console.log(combineArrayWithString(['Apple', 'Orange', 'Banana'], 'Kiwi')) // ['Apple', 'Orange', 'Banana', 'Kiwi']

// Task 67
// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

const combineStringWithArrayWithSpread = (arr1: string[], a: string): string[] => {
    return [a, ...arr1];
}

console.log(combineStringWithArrayWithSpread(['Apple', 'Orange', 'Banana'], 'Kiwi')) // ['Kiwi', 'Apple', 'Orange', 'Banana']

// Task 68
// Write a function that takes two objects as parameters 
// and return an object which contains properties from both objects

const combineTwoObjectsWithSpred = (obj1: Record<any, any>, obj2: Record<any, any>) => {
    return {...obj1, ...obj2};
}

console.log(combineTwoObjectsWithSpred({ a:1, b:2 }, { c:3, d:4 })) // { a:1, b:2, c:3, d:4 }
console.log(combineTwoObjectsWithSpred({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })) // { a:1, b:2, c:3, d:4, e:5, f:6 }

// Task 69
// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

const objectAndFavoriteMovie = (obj: Record<string, any>, favoriteMovie: string) => {
    return { ...obj, favoriteMovie };
}

console.log(objectAndFavoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield')) // { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(objectAndFavoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight')) // { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }