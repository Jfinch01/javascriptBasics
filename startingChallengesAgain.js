// Converts a number data type to a string
const numToString = (num1) => {
    return num1.toString();
}
console.log (typeof numToString(55));

// Increases any given number by 1
const numIncreaseBy1 = (num2) => {
    let increaseNumBy1 = ++ (num2);
    console.log(increaseNumBy1);
}
numIncreaseBy1 (10);

//  Decreases any given number by 1
const numDecreaseBy1 = (num3) => {
    let decreaseNumBy1 = -- (num3);
    console.log(decreaseNumBy1);
}
numDecreaseBy1 (10);

// Adds X to Y
const adds2Nums = (num4, num5) => {
    let sumAdd = (num4) + (num5);
    console.log(sumAdd);
}
adds2Nums (4,21);

// Subtracts X and Y
const subs2Nums = (num6, num7) => {
    let sumSub = (num6) - (num7);
    console.log(sumSub);
}
subs2Nums (9,4);

// Multiplies X by Y
const times2Nums = (num8, num9) => {
    let sumTimes = (num8) * (num9);
    console.log(sumTimes);
}
times2Nums(5,5);

// Divides X by Y
const div2Nums = (num10, num11) => {
    let sumDivide = (num10) / (num11);
    console.log(sumDivide);
}
div2Nums(9,3);

// Times a number by itself.
const sqrNum = (num12) => {
    let SqrANumber = (num12) * (num12);
    console.log(SqrANumber);
}
sqrNum(12);

// Print out the sum of X + Y = Z or X / Y = Z
// 
// 
// 
// 
// 


// Checks if X is greater than Y
const gr8rThan = (num13, num14) => {
    if (num13 < num14) {
        return true
    }
    else {
        return false
    }
}
console.log(gr8rThan(12,53))

// Checks if the number is even
const evenNum = (num15) => {
    if (num15 % 2 == 0){
        return true
    }
    else {
        return false
    }
}
console.log(evenNum(15));

//  Checksw if the number is odd
const oddNum = (num16) => {
    if (num16 % 2 == 0){
        return false
    }
    else {
        return true
    }
}
console.log(oddNum(16));

// Gives a grade based on how many % you got.
const letterGrade = (num17) => {
    if (num17 < 60) {
        console.log ("Failed. Completely.");
    }
    else if (num17 >= 60 && num17 <70) {
        console.log ("D");
    }
    else if (num17 >= 70 && num17 <80) {
        console.log ("C");
    }
    else if (num17 >= 80 && num17 <90) {
        console.log ("B");
    }
    else {
        console.log ("A");
    }
}
letterGrade(2)

// Combines 2 sentences or words together
// const combWords = (word1, word2) => {
//     console.log(word1 +" "+ word2)
// }
// combWords("Hello", "World")

// Completed day 1 of the tasks
// 
// 

// Day 2
// Lists all the multiples of 3 and 5 and adds all of them together up to 1000
let k = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        k += i
    }
}
console.log(k)

// Finding the index of the first and last instance of a specific word.
let str = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
let findHiFirst = str.indexOf("hi")
let findHiLast = str.lastIndexOf("hi")

console.log(findHiFirst);
console.log(findHiLast);

// Printing out each letter in a string individually
let str1 = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"

