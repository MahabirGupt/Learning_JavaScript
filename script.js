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

//addition operators
var a = 5;
var b = 10;
// console.log(a + b);
a += b;
// same as a = a+b
console.log(a);

var a = 5.2;
var b = 4.5;
console.log(a + b);

// joining or concatenating 2 strings together
var a = "Join";
var b = " us!";
console.log(a + b);
// joining or concatenating a string and a number together
var a = "Join";
var b = 4;
console.log(a + b);

var a = "3";
var b = 4;
console.log(a + b);

// joining or concatenating a string and a boolean together
var a = "Join";
var b = true;
console.log(a + b);

// joining or concatenating a string and an array together
var a = "Join";
var b = [1, 2];
console.log(a + b);

// joining or concatenating a number and a boolean together
var a = true;
var b = 12;
console.log(a + b);
// joining or concatenating a number and null together
var a = null;
var b = 12;
console.log(a + b);

// joining or concatenating a number and undefined together
var a = undefined;
var b = 12;
console.log(a + b);

// joining or concatenating a number and NaN together
var a = NaN;
var b = 12;
console.log(a + b);

// subtracting 2 numbers
var a = 13;
var b = 2;
a -= b;
// same as a=a-b;
console.log(a);

// subtracting 2 strings
var a = "Split us";
var b = "us";
console.log(a - b);

// subtracting a number and a string
var a = 13;
var b = "5";
console.log(a - b);

// multiplying 2 numbers
var a = 13;
var b = 2;
a *= b;
// same as a=a*b;
console.log(a);

// multiplying 2 float numbers
var a = 1.3;
var b = 2.2;
console.log((a * b).toFixed(2));

// multiplying a num with a string number
var a = 4;
var b = "2.2";
console.log(a * b);

// multiplying a num with a string text
var a = 4;
var b = "join";
console.log(a * b);

// multiplying 2 string texts
var a = "another";
var b = "join";
console.log(a * b);

// multiplying a num with null
var a = 4;
var b = null;
console.log(a * b);

// multiplying a num with infinity
var a = 4;
var b = Infinity;
console.log(a * b);

// dividing 2 numbers
var a = 12;
var b = 2;
a /= b;
// same as a=a/b;
console.log(a);

// dividing a num with a string number
var a = 10;
var b = "2";
console.log(a / b);

// dividing a float num with another number
var a = 3.3;
var b = 2.2;
console.log((a / b).toFixed(2));

// dividing a num with another number and using modulus
var a = 10;
var b = 3;
console.log(a % b);

// dividing a num with infinity
var a = 10;
var b = Infinity;
console.log(a / b);

// comparison operators
console.log(1 == 1);
console.log(1 === 1);
console.log(1 === "1");
console.log(1 == "1");
console.log(1 != 2);
console.log(1 !== "1");
console.log(1 > 0);
console.log(1 >= 1);
console.log(1 >= "1");
console.log(NaN == NaN);
console.log(NaN != NaN);
console.log(0 == null);
console.log(null == undefined);
console.log(0 == undefined);

// boolean operators
if (1 == 1 && 2 == 2) {
  console.log("true");
} else {
  console.log("false");
}

var isTrue = true;
console.log(!isTrue);

var a = 5;
var b = 5;
if (a == b) {
  console.log("Equal");
} else {
  console.log("Not equal");
}
// using ternary operator
console.log(a == b ? "Equal" : "Not Equal");

var a = 5;
var b = 6;
console.log(a + b * 2);
console.log((a + b) * 2);

// Primitive and Reference Types
var aNumber = 5;
console.log(aNumber);
var anotherNumber = aNumber;
console.log(anotherNumber);
aNumber = 12;
console.log(aNumber);
console.log(anotherNumber);

var array = [1, 2, 3];
console.log(typeof array);
var anotherArray = array;
console.log(array);
console.log(anotherArray);
array.push(4);
console.log(array);
console.log(anotherArray);

var array = [1, 2, 3];
console.log(typeof array);
var anotherArray = array;
// creating a new object
var array = ["a", "b"];
console.log(array);
console.log(anotherArray);

// Scope
// Global Scope
var test = "Global scope";
function localScope() {
  // overriding the “Global variable” by redeclaring the variable
  var test = "Local scope";
  console.log(test);
}
localScope();
console.log(test);

// possible only if not using strict mode
function localScope() {
  // automatically becomes a global variable
  test = "Local scope";
  console.log(test);
}
localScope();
console.log(test);

// Array
var array = [1, 2, 3];
console.log(array.length);
console.log(array[1]);
// changing the value of array[1]
array[1] = 100;
console.log(array);
array[3] = 200;
console.log(array);

// forEach() method
var array = [1, 2, 3];
// creating an annoynomus function that takes an argument element. Argument name can be anything
array.forEach(function (element) {
  console.log(element);
});

// push
var array = [1, 2, 3];
array.push(4);
console.log(array);

var array1 = [1, 2, 3];
array1.push(4);
console.log(array1);

var array2 = [1, 2, 3, ,];
array2.push(4);
console.log(array2);

// pop
var array = [1, 2, 3];
// pop does not take any argument
// array.pop();
console.log(array.pop());
console.log(array);

// shift
var array = [1, 2, 3, 4];
console.log(array.shift());
console.log(array);

// unshift
var array = [1, 2, 3, 4];
array.unshift("new_element");
console.log(array);

// indexOf
var array = [1, 2, 3, 4];
array.unshift("new_element");
console.log(array.indexOf("new_element"));

var array = [1, 2, 3, 4];
array.unshift("new_element");
array[array.indexOf("new_element")] = "old_element";
// same as array[0] = "old_element";
console.log(array);

// getting part of the elements of the array
var newArray = array.splice(3);
// 3 is the index position from which the array will be slice
console.log(newArray);

// getting the middle element of the array
var middleArray = array.splice(2, 2);
// 2,2 first 2 is the element number and the second 2 is the number of elements that we want to slice
console.log(middleArray);
console.log(array);

// slice
var array = [1, 2, 3, 4];
array.unshift("new_element");
array[array.indexOf("new_element")] = "old_element";
// same as array[0] = "old_element";
console.log(array);
var sliceArray = array.slice(2, 4);
console.log(sliceArray);
console.log(array);

// filter method
var array = [1, 2, 3, 4];
array.unshift("new_element");
array[array.indexOf("new_element")] = "old_element";
// same as array[0] = "old_element";
// creating an anoynous function and passing in the value as argument
// value can be any name but must pass an argument
console.log(
  array.filter(function (value) {
    return value > 2;
  })
);
// print the original array
console.log(array);

// map method
var array = [1, 2, 3, 4];
array.unshift("new_element");
array[array.indexOf("new_element")] = "old_element";
// same as array[0] = "old_element";
// creating an anoynous function and passing in the value as argument
// value can be any name but must pass an argument
console.log(
  array.map(function (value) {
    return value * 2;
  })
);
// print the original array
console.log(array);

// reverse method
var array = [1, 2, 3, 4];
array.unshift("new_element");
array[array.indexOf("new_element")] = "old_element";
// same as array[0] = "old_element";
// for reverse method do not need to pass and argument
console.log(array.reverse());
// print the original array
console.log(array);

// concat operation
var array = [1, 2, 3, 4];
array.unshift("new_element");
array[array.indexOf("new_element")] = "old_element";

var newArray = ["join", "me"];
console.log(array.concat(newArray));
console.log(array);
console.log(newArray);

// join operation
var array = [1, 2, 3, 4];
array.unshift("new_element");
array[array.indexOf("new_element")] = "old_element";

// var newArray = ["join", "me"];
// console.log(array.join(newArray));
console.log(array.join(","));
console.log(array);
// console.log(newArray);

// reducing arrays
var array = [1, 2, 3, 4];

// reduce takes function as an argument
// function takes 2 arguments - total and value
console.log(
  array.reduce(function (total, value) {
    console.log("total = " + total + " Value = " + value);
    return total + value;
  })
);
console.log(array);
