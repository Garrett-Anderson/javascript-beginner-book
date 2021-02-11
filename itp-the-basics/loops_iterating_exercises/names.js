let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);


let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');