let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});


function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5);


