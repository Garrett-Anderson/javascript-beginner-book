a = 5 // registers as true
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

b = 0 // registers as false
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}


let x; // registers as true

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.oog("it is not true");
}


let isOk;
if (foo || bar) {
  isOk = true;
} else {
  isOk = false;
}

let ifOk = !!(foo || bar);
