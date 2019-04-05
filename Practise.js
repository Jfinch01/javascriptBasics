
/*
Adds 1 every time until it gets to the <67
for (i = 44; i < 67; i++) {
    console.log(i);
}*/
/*

Logs the number of symbols inside the string
console.log("Hello".length);
console.log("Hello World".length);

Logs a number
console.log(23);
console.log(3.14);
console.log(false);

Makes it all uppercase
console.log("Hello World".toUpperCase());

Makes it all lowercase
console.log("Hello World".toLowerCase());

Cuts off all the uneeded spaces
console.log("      Hello World       ".trim("Hello"));
*/
/*
Rounds it down
console.log(Math.floor(Math.random()*10))
*/

/*
Searches the string and gives you the numerical position
console.log("Hello World".search("W"))

console.log("Hello World".lastIndexOf("e"));*/
/*
 Extracts a letter specified and gives you the numerical value 
console.log("Hello World".slice(3,7));*/
/*substring extracts a specific part of a string. 0-4 Up to but not including 4
console.log("Hello World".search("e"));*/
/*Tells you what you're looking for and where you want the search to stop
console.log("Hello World".substring(6,9));*/
/*Tells you where you're looking for and how many characters you want 
to be displayed
console.log("Hello World".substr(6,5));*/
/*Adds onto to
console.log("Hello World".concat(", Welcome"));*/
/* replaces a word in the string with whatever you're looking for*/
console.log("Hello World".replace("World" , "Bubbles"));
/*Changes the 8th character to uppercase 
console.log("All Around the World".substr(7,1).toUpperCase());*/
/*Does the same as the one above just in a different format
console.log("All Around the world".toUpperCase().charAt(7));*/


/*Let Variables can be changed throughout, at any point but the type 
of variable can't be changed
let name = "James";
console.log(name);

name = "Bubbles";
console.log(name);

let i = 10;
console.log(i);
i = 3.14;
console.log(i);*/

/* Constant values can't be changed.
const b = 10;
console.log (b);*/

/* Basically does the same thing that a let variable does,
but var is just older. I think...
var a = 10;
console.log(a);*/

/*
let age = 20;
console.log(age)*/
/*Times by 3
age *= 3
console.log(age);*/
/*Adds 1 
age ++
console.log(age);*/
/*Minus 1
age --
console.log(age);
age /= 3
console.log(age);*/


/* camelCase is used to name stuff. Javascript is case sensitive so you need to 
make sure that you always stick to the same case every time you call a variable.*/

/*The $ lets you put your variable inside a string
let favouriteDrink = "Coffee";
console.log(`My favourite drink is ${favouriteDrink}`)

let name1 = "James"
let age1 = 20
let favouriteColour = "Purple"
console.log(`My name is ${name1} I am ${age1} years old and my favourite colour is  ${favouriteColour}`)
*/
/*
let name = "James"

if (name == "James") {
    console.log("Your name is James")
}
else if (name == "Bubbles") {
    console.log("")
}
else {
    console.log("What is your name?")
}*/
/*
let myNumber = 5*/
/* this checks if the values are equal reguardless of type. 
=== would check if the value and the type are both equal
if (myNumber == 5) {
    console.log(myNumber)
}
else {
    console.log("Your number sucks!")
}*/

/* !== checks if they are not equal values and types.*/
/*The % symbol means that it divides and outputs the remainder.
console.log(10 % 5)*/

/* I have no idea why this does this and need to figure it out at some point
console.log(3 % 11)*/
/*
let age = 20
let country = "England";
/*The && means and and the || means or
if (age > 17 && country == "England") {
    console.log("I'm able to serve you alcohol.")
}
else {
    console.log("You aren't old enough")
} 
/*
if (place == "Manc"&& weather == "Sunny") {
    console.log("Check again")
}
else if (place == "Manc" && weather == "Rain"){
    console.log("Obvs")
}
else {
    console.log("What? It isn't raining?")
}*/

/*
let password = ("C0d3Nati0n")
let passwordLength = (password.length)

if (passwordLength < 8){
    console.log("Password too short")
}
else {
    console.log(password)
}

let num = 256

if (num % 3 == 0 && num % 5 == 0){
    console.log("This is divisable by 3 and 5")
}
else {
    console.log("This is not divisible by 3 and 5")
}

let num1 = 30

if (num1 % 3 == 0 && num1 %5 ==0){
    console.log("Fizz Buzz")
}
else if (num1 % 5 == 0){
    console.log("Buzz")
}
else if (num1 % 3 == 0){
    console.log("Fizz")
}
else {
    console.log(num1)
}



let num2 = 102201;
let num3 = num2.toString().split("").reverse().join("")

if(num2 == num3){
    console.log("This is a palindrome")
}
else {
    console.log("This is not a palindrome")
}




const sayHi = (name) => {
    console.log(`Hiya ${name}`)
}

sayHi("James");


const drinksTime = (size, typeOfDrink) => {
    console.log(`I will have a ${size} ${typeOfDrink} please :)`)
}

drinksTime("Large","Latte");

const factorial = (n) => {
    if ((n === 0) || (n === 1)) { 
        return 1;
    } 
    else {
        return (n * factorial(n-1));
    } }
    console.log(factorial(33));


let space1 = ("o")
let space2 = ("o")
let space3 = ("o")
let space4 = ("x")
let space5 = ("x")
let space6 = (" ")
let space7 = ("o")
let space8 = (" ")
let space9 = (" ")

console.log("    |     |  ");
console.log(` ${space1}  |  ${space2}  |  ${space3}  `);
console.log("    |     |   ");
console.log("---------------");
console.log("    |     |   ");
console.log(`  ${space4} |  ${space5}  |  ${space6} `);
console.log("    |     |   ");
console.log("---------------");
console.log("    |     |   ");
console.log(`  ${space7} |  ${space8}  |  ${space9} `);
console.log("    |     |   ");

if (space1 == "x" && space2 == "x" && space3 == "x"){
    console.log("X win!")
}
else if (space1 == "o" && space2 == "o" && space3 == "o"){
    console.log("O win!!")
}
else{ 
    console.log("No one has won yet")
}

const osAndxs = (space1, space2, space3, space4, space5, space6, space7, space8, space9) => {

console.log("    |     |  ");
console.log(` ${space1}  |  ${space2}  |  ${space3}  `);
console.log("    |     |   ");
console.log("---------------");
console.log("    |     |   ");
console.log(`  ${space4} |  ${space5}  |  ${space6} `);
console.log("    |     |   ");
console.log("---------------");
console.log("    |     |   ");
console.log(`  ${space7} |  ${space8}  |  ${space9} `);
console.log("    |     |   ");
}

osAndxs ("x","o","o","x","o","o","x","x","x");

const pinNumber = 1234
let bankBalance = 50
let withdrawalAmount = 25

const pinChecking = (pinNumber, enterPin) => {
    if(balance >= withdrawalAmount) {
        return true;
    }
    else {
        console.log("Please re-check your PIN number")
    }
}



console.log(`Your bank balance is £${bankBalance}`)


const addUp = (num01, num10) => {
    return num01 + num10
}
let answer = addUp(3.14159265,1)

console.log(addUp(answer, 5))


const multiplicationSum = (num1, num2) => {
    return num1 * num2
}
let answer2 = multiplicationSum(4,5)
console.log(multiplicationSum(answer2,5))

let coffeeOrder = ['Sam - Hot Chocolate','Stuart - Cortado','Dan - Latte']

coffeeOrder[0] = "Stuart - Latte"
console.log(coffeeOrder[0])

coffeeOrder.push("James - Monster")

console.log(coffeeOrder)

coffeeOrder.pop()
console.log(coffeeOrder)


// shift, unshift, slice, splice
coffeeOrder.shift()
console.log(coffeeOrder)

coffeeOrder.unshift("James - Monster")
console.log(coffeeOrder)

let coffee = coffeeOrder.slice(0,2)
console.log(coffee)
coffeeOrder.push("asuhbqwhbd","asdhhasbdyhasd")
coffeeOrder.splice(0,3)
console.log(coffeeOrder)

let favouriteWebsites = ['9gag','Reddit','battle.net']
console.log(favouriteWebsites)

favouriteWebsites.push("Google.com")
console.log(favouriteWebsites)

favouriteWebsites.unshift("Stackoverflow")
console.log(favouriteWebsites)

// favouriteWebsites.splice(2,3)
console.log(favouriteWebsites.slice(1))

const numberToString = (num) => {
    return num.toString()
}
console.log (typeof numberToString(5))

const increase = (num) => {
    let increasedNumber = ++ num
    console.log(increasedNumber)
}
increase (5)

const added1 = (num1) => {

}

const addNumbers = (num2, num3) => {
    return num2 + num3
}
let answer1 = addNumbers(2,3)
console.log(answer1)

const subNumbers = (num4, num5) => {
    return num4 - num5
}
let answer2 = subNumbers(4,2)
console.log(answer2)


const xNumbers = (num6, num7) => {
    return num6 * num7 
}
let answer3 = xNumbers(9,3)
console.log(answer3)


const divNumbers = (num8, num9) => {
    return num8 / num9 
}
let answer4 = divNumbers(9,3)
console.log(answer4)

const calc1 = (x, oP, y) => {
    if (oP = "+") {
        return x + y
        console.log("Operation is add")
        }
    else if (oP = "-") {
        return x - y
        console.log ("Operation is subtract")
    }
    else if (oP = "*") {
        return x * y
        console.log ("Operation is multiply")
    }
    else if (oP = "/") {
        return x / y
        console.log ("Operation is divide")
    }
    else {
        console.log ("Please input numbers")
    }
} */

// for (i = 9; i > -1 ; i--) {
    // console.log(i);
// }

let favouriteDrinks = ['Pepsi Max','Fanta','Coffee','Monster'];
for(drinksIndex = 0; drinksIndex < favouriteDrinks.length; drinksIndex++) {
    console.log(favouriteDrinks[drinksIndex]);
}

let favouriteFilms = ['Unleashed','Harry Potter','Mr Robot','Love, Death + Robots','POI']
favouriteFilms.unshift("Starwars")
favouriteFilms.push("Lord of the Rings")
for(filmsIndex = 0; filmsIndex < favouriteFilms.length; filmsIndex++){
    console.log(favouriteFilms[filmsIndex]);
}
const filmCheck = (favouriteFilms) => {

    if (favouriteFilms[3] == 'Mr Robot'){
        console.log("Let's hack the world")
    }
    else {
        console.log("Try again")
    }
}
filmCheck(favouriteFilms)

let answer = []
let k = 0


for (i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0){
        answer[k] = i;
        k++;
    }
}

let sum = 0;

for (i = 0; i < answer.length; i++) {
    sum += answer[i];
}

console.log(sum);

let str = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let pos = str.indexOf("hi");
let pos2 = str.lastIndexOf('hi');
console.log(pos)
console.log(pos2)

/*
for (index = 0; index < str.length; index++){
    console.log(str[index])
}

let end = 90283743503594

for (pal1 = 0; i < pal1 < 90283743503594; i++) {
    if
}


let num2 = 102201;
let num3 = num2.toString().split("").reverse().join("")

if(num2 == num3){
    console.log("This is a palindrome")
}
else {
    console.log("This is not a palindrome")
}
*/

// looping through to find how many times the letter H appaears
// loop through and print the latter H. Extend to substring method to extend to i to find History
// looping through at each webkitConvertPointFromNodeToPage, finding a substring of 2 letters and checking 
// if those 2 letts are the word hi

let lookingForWord = ("hi")



let person = {
    name:"James",
    age:20,
    favouriteDrinks:["Coffee","Monster","Other stuff"],
    friendlyGreeting () {
        return 'Hi, nice to see you'
    },
    meanGreeting () {
        return 'No.'
    }
};
console.log(person.friendlyGreeting())

console.log(person.name)

person.favBiscuits = ['custard creams','posh biscotti'];

console.log(person.favBiscuits)

person.favSongs = ['Moonlight Sonata','Witch Doctor','Buss it down','Do it myself.']

console.log(person.favSongs)



let person1 = {
    name:"James",
    age:20,
    favouriteDrinks:["Coffee","Monster","Other stuff"],
    // looking for this thing inside the scope
    mood:"bad",
    greeting () {
        if (this.mood == "good"){
            return `Hi, nice to see you!`
        }
        else {
            return `Hi, now go away`
        }},
    sayHi (){
        return `Hi, my name is ${this.name}`
        }
    
}
console.log(person1.greeting())
console.log(person1.sayHi())


let rabbit = {
    name: "Sherlock", 
    colour: "Black and white",
    ears: "Uppy.",
    hopping: true,
    chewing: true,
    hoppingAndChewing () {
        if (this.hopping == true && this.chewing == false){
            return `${this.name} is hopping`
        }
        else if (this.chewing == true && this.hopping == false) {
            return `${this.name} is chewing`
        }
        else if (this.hopping == true && this.chewing == true){
            return `${this.name} is hopping and chewing`
        }
        else {
            return `I think ${this.name} died...`
        }
    }
}
console.log(rabbit.hoppingAndChewing())

 
