function say(words) { // using functions
  console.log(words + "!");
}

say("hello");
say("hi");
say("how are you");
say("I'm fine"); 


function add(a, b) { // return values
  return a + b;
}

add(2, 3);

let twoAndThree = add(2, 3); 
console.log(twoAndThree);


function say(words = "hello") { // default paramaters
  console.log(words + "!");
}

say("Howdy");
say();


function foo() { // nested functions
  function bar() {
    console.log("BAR");
  }

  bar();
  bar();
}

foo();
bar();


