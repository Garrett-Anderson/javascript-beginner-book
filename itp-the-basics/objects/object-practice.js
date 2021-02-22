let bob = { name: 'Bob', age: 22 }; // prototypes
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name);

let person = { // for/in loop
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}


let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}


let personKeys = Object.keys(person);
console.log(personKeys);
personKeys.forEach(key => {
  console.log(person[key])
});
