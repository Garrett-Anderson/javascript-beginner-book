let greetingMessage = "Good Morning!"; // global variables

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople();


function greetPeople() { // local variables
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage);


function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople("Good Morning!");


let name = "Pete Hanson"; // mutating the caller
console.log(name.toUpperCase()); //temporary
console.log(name);

let oddNumbers = [1, 3, 5, 7, 9]; 
oddNumbers.pop(); //permanent
console.log(oddNumbers);


function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive);


function addToArray(array) {
  return array.concat(10);
}

let oneToSix = [1, 2, 3, 4, 5, 6];
console.log(addToArray(oneToSix)); //  [1, 2, 3, 4, 5, 6, 10]
console.log(oneToSix);             //  [1, 2, 3, 4, 5, 6]


function add(a, b) { // function composition
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum);

let difference = subtract(80, 10);
console.log(difference);

console.log(add(20, 45));
console.log(subtract(80, 10));

function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))


add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560


greetPeople(); // three ways to define a function

function greetPeople() {
  console.log("Good Morning!");
}

let greetSomeone = function () { // three ways to define a function
  console.log("Good Morning!");
};

greetSomeone();


let greetHer = () => console.log("Good Morning!"); // arrow function
greetHer();


