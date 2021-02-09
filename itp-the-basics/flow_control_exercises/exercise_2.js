function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}


function barCodeScanner(serial) { // exercise 4
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
  }
}





function isArrayEmpty(arr) { // exercise 6
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);



function capsLong(string) { // exercise 7
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsLong("Garrett Anderson"));
console.log(capsLong("Max"));


function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}