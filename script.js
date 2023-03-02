console.log("Hello there");
{
  /* declaring a string text type */
}
var name = "Anish";
console.log(name);
{
  /* declaring a boolean text type */
}
var boolean = true;
console.log(boolean);
var float = 10.6;
console.log(float);
console.log(typeof float);
var array = [1, 2, 3];
console.log(array);
var array1 = [1, 2, 3, "4"];
console.log(array1);
console.log(array1[2]);
var dataValue = null;
console.log(dataValue);
console.log(typeof dataValue);
var dataValue1 = undefined;
console.log(dataValue1);
console.log(typeof dataValue1);
console.log(dataValue == dataValue1);
console.log(dataValue === dataValue1);
var dataValue2 = NaN;
console.log(NaN);

var dataType = {
  child1: "Max",
};
console.log(dataType);
console.log(dataType.child1);
console.log(typeof dataType);

function calc() {
  // calc is the name of the function
  console.log("Inside a function!");
}
// can call the function after declaring the function or before calling the function.
calc();
console.log(typeof calc);

var calc = function () {
  // calc is the name of the function
  console.log("Inside a function!");
};
calc();
console.log(typeof calc);

var anotherFunction = calc();
// or
var anotherFunction = calc;
anotherFunction();

function string() {
  // return "A string";
  // or
  var stringVar = "A string";
  return stringVar;
}
var returned = string();
console.log(returned);

function add(number1, number2) {
  return number1 + number2;
}

var results = add(1, 2);
console.log(results);
// or
var results = add;
console.log(results(1, 2));

var condition = true;
var anotherCondition = true;

if (condition) {
  console.log("Executed!");
} else if (anotherCondition) {
  console.log("Still Executed");
} else {
  console.log("Not Executed!");
}

// creating switch statement
var luckyNumber = 8;
switch (luckyNumber) {
  case 1:
    console.log("Is 1");
    break;
  case 2:
    console.log("Is 2");
    break;
  case 8:
    console.log("Is 8");
    break;
  default:
    console.log("Default");
    break;
}
// creating a for loop
for (var i = 0; i < 5; i++) {
  console.log(i);
}
// creating nested for loops
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i * j);
  }
}
for (var i = 0; i < 5; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
}
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
    if (i == 1) {
      continue;
    }
    console.log("inside inner loop j = " + j);
  }
  console.log(i);
}
// declaring an array
var array = [1, 2, 3];
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// using while loop
var value = 5;
while (value < 7) {
  console.log(value);
  value++;
}

var condition = true;
var i = 2;
while (condition) {
  if (i == 3) {
    condition = false;
  }
  console.log(i);
  i++;
}

// using do-while loop
var condition = false;
do {
  console.log("Executed!");
} while (condition);

//
