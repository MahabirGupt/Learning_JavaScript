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

// creating an object
var person = {
  identity: "Mahabir",
  // we use colon: and not =
  // same as
  "first-identity": "Mahabir",
  age: 42,
  // same as
  age: 42,
  // creating another object in an object
  details: {
    hobbies: ["Sports", "Cooking"],
    location: "Germany",
  },
  // creating a function inside an object
  greet: function () {
    console.log("Hello!");
  },
};
console.log(person);
console.log(person.age);
console.log(person.identity);
console.log(person.details.hobbies);
console.log(person["first-identity"]);
// calling the function greet
person.greet();
console.log(typeof person.identity);
// same as
var greet = function () {};
// should not use this method
console.log(person["age"]);

var field = "identity";
console.log(person[field]);

// using this keyword
var person = {
  identity: "Mahabir",
  // we use colon: and not =
  // same as
  "first-identity": "Mahabir",
  age: 42,
  // same as
  age: 42,
  // creating another object in an object
  details: {
    hobbies: ["Sports", "Cooking"],
    location: "Germany",
  },
  greet: function () {
    console.log("Hello, I am " + this.identity);
  },
};
person.identity = "Anish";
console.log(person.identity);
console.log(person);
person.greet();

// creating object non literal notation
var anotherPerson = new Object();
// Object here is a built-in Object
anotherPerson.name = "Anishkaa";
anotherPerson.age = 8;
console.log(anotherPerson);

var person = {
  identity: "Anishkaa",
  age: 8,
};

var person1 = {
  identity: "Anishkaa",
  age: 8,
};

console.log(person == anotherPerson);
console.log(person == person1);

var person = {
  index: "Mahabir",
  age: 42,
};
// creating object using the static method create
// must pass an argument in the function create
var anotherPerson = Object.create(null);
anotherPerson.name = "Anishkaa";
console.log(anotherPerson);
var anotherPerson = Object.create(person);
console.log(anotherPerson.age);

// Prototypes Introduction
var person = {
  index: "Mahabir",
  age: 42,
};
// also known as dunder proto
console.log(person.__proto__);

Object.prototype.greet = function () {
  console.log("Hello there! I am  " + this.index + "!");
};

// create an object
var max = Object.create(person);
var anna = Object.create(person);
anna.index = "Anna";

console.log(max.index);
max.greet();
anna.greet();
// person.greet();
// console.log(person.toString());
console.log(anna.__proto__ == person);
console.log(anna.__proto__.__proto__ == Object.prototype);
// safer way of checking
console.log(Object.getPrototypeOf(anna) == person);

// constructor functions
function Person() {
  this.name = "Anishkaa";
  // this refers to the person, “Anishkaa”
  this.greet = function () {
    console.log("Hello I am " + this.name);
  };
}
console.log(this.name);
Person.prototype.greet = function () {
  console.log("Hello!");
};
Person.prototype.name = "Anish";
//constructing an object using the function Person
var person = new Person();
// person.name = "Max";
console.log(person.name);

person.greet();
console.log(person);
console.log(person.__proto__ == Object.prototype);
console.log(person.__proto__ == Person);
console.log(person.__proto__ == Person.prototype);

// constructor functions
function Person() {
  this.name = "Anishkaa";
  // this refers to the person, “Anishkaa”
  this.greet = function () {
    console.log("Hello I am " + this.name);
  };
}

Person.prototype.greetGeneral = function () {
  console.log("Hello");
};
var person = new Person();
person.name = "Max"; //overwriting the instance not the constructor function
Person.prototype.name = "Anish";
person.greet();

var anotherPerson = new Person();
anotherPerson.greet();
anotherPerson.greetGeneral();

// checking if a variable is an instance of a constructor function
console.log(person instanceof Person);

// Person constructor function and passing in parameters
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person = new Person("Anish", 11); //passing in the parameters
console.log(person);
// OR
var anish = new Person("Anish", 11);
var anishkaa = new Person("Anishkaa", 8);
console.log(anish);
console.log(anishkaa);

// four different ways of creating objects
// 1.Literal Notation
var person = {
  identity: "Anish",
  age: 11,
};
console.log(person);
console.log(person instanceof Object);

// 2. 2nd way of creating an object
var person = new Object();
person.name = "Anish";
person.age = 11;
console.log(person);

// 3. 3rd way using Object create
var person = Object.create(null); //you can pick your prototype and set it to null if you don't want this to have a prototype
person.name = "Anish";
person.age = 11;
console.log(person);

// 4. 4th way using constructor function
function Person() {
  this.name = "Anish";
  this.age = 11;
}

var person = new Person(); //not using the built-in new Object() but the function Person
console.log(person);

function fn() {
  console.log(this); //is not refering to the global object but instead to the part on the left of the dot which is obj
}
// fn();

var obj = {
  obfn: fn, // holds a reference to this function
};

obj.obfn();

// if want to refer to the global object this then use bind
obj.obfn.bind(this)();

function fn() {
  console.log(this); //is not refering to the global object but instead to the part on the left of the dot which is obj
}
var obj = {
  obfn: fn, // holds a reference to this function
};
var person = {
  identity: "Anish",
};
obj.obfn.bind(person)(); //with bind I can pass whatever this here should refer to

function fn(message) {
  console.log(message + this);
}
var obj = {
  //this refers to this object, obj
  obfn: fn,
};
var person = {
  identity: "Anish",
};
obj.obfn.bind(person, "Hello")(); //can also use call
obj.obfn.call(person, "Hello"); // don't need the extra parenthesis () this instantly calls the method on its own
// can also use apply
obj.obfn.apply(person, ["Hello"]); //it also calls the function immediately but you pass the arguments as arrays

// creating an account object
var account = {
  cash: 12000,
  _name: "Default", //this is a property on my object
  withdraw: function (amount) {
    this.cash -= amount;
    console.log(
      "Withdrawal amount = " + amount + " , new cash reserve = " + this.cash
    );
  },
};

account.withdraw(1000);

// can create a method to deposit money
account.deposit = function () {};
// use the static built-in object instead
Object.defineProperty(account, "deposit", {
  // configure the property
  // use the keyword value
  value: function (amount) {
    this.cash += amount;
    console.log(
      "Deposit amount = " + amount + " , new cash reserve = " + this.cash
    );
  },
}); //pass as a first argument the object on which I want to define a new property and for the 2nd argument pass a string as the name of the property that you want to create
//the third argument is the JavaScript object
account.deposit(3000);

Object.defineProperty(account, "name", {
  // value: "ID - 00001",
  // make it writable by setting writable to true
  // writable: true,
  // enumerable: true,
  // getter
  get: function () {
    // this function will be called whenever I try to acess this name value
    return this._name;
  },
  // setter
  set: function (name) {
    if (name == "Max") {
      this._name = name;
    }
  },
});
console.log(account.name);
account.name = "ID - 00003";
console.log(account.name);
console.log(account._name);

// creating and object person
var person = {
  name: "Anishkaa",
  age: "7",
  greet: function () {
    console.log("Hello");
  },
};
// delete a field of an object
// delete person.name;
// console.log(person);
// console.log(person.name);

// checking if a certain field exist in an object
console.log("name" in person);

// loop through all the properties of an object
for (var field in person) {
  // name of field can be anything
  console.log(field);
  // if want to print out the value of the field and not the name only
  console.log(person[field]); //use the syntax object_name[field] to access the value of an object field
}
// try and catch method
try {
  //execute the code
  // demonstrate a way where we will get an error
  test();
} catch (error) {
  // if there is an error execute this code
  console.log("error");
} finally {
  // this code should always get executed
  console.log("execute this code");
}

// closures
function generator(input) {
  var number = input;
  // function generator will return another function called closure
  return function () {
    //return function does not have a name
    return number * 2;
  };
}
var calc = generator(900);
console.log(calc);
console.log(calc());
var calcAnother = generator(1000);
console.log(calcAnother());

// Immediately Invoked Functions Executions (IIFEs)
(function calc() {
  // this function gets executed automatically
  console.log("Calc");
  var number = 10;
  console.log(number);
})();
// add parenthesis() around the above function and after the function
console.log(number); //will return an error because number is a local scope and not a global scope

(function calc(input) {
  // this function gets executed automatically
  var number = input;
  console.log(number);
})(10);

var obj = {}; // created the obj in global scope so will print obj
(function calc(input) {
  obj.name = "Mahabir"; //changing the global scope object and not local scope variable
})(obj);
console.log(obj);

// Built-in methods and properties
// using arguments
function message(message) {
  console.log(message);
  // inside a function we have acess to certain variable
  console.log(arguments); // did not create the variable argument
  console.log(arguments[0]); // access the first argument
  console.log(arguments[2]); // access an argument which is not there
  console.log(arguments.length); //asssessing the length property to check the number of arguments
}

message("Hi"); // pass one argument
message("Hello", 10); // pass two arguments

function message(message) {
  console.log(message);
}
console.log(message.name); // will print "message" which is name of function

function messageName(message) {
  console.log(message);
}

var msg = messageName;
console.log(msg.name);
console.log(msg.length);

function messageName(message, numbers) {
  console.log(message);
}

var msg = messageName;
console.log(msg.length);

// another way to write a function
var msg = function (message) {
  console.log(message);
};
console.log(msg.name);

function message(message) {
  console.log(this.name);
}
message();

// setTimout function // it is a built-in function or a method in the window object
setTimeout(function () {
  // pass 2 arguments
  console.log("Finished!");
}, 2000); // add a comma to add the 2nd argument and indicate the time in milliseconds

// setInterval functions //it is registered on the window object. It is method of the window object.
setInterval(function () {
  // expects a function as the first argument
  console.log("Ping!");
}, 500); // provide the interval in milliseconds as the 2nd argument

// to stop the setInterval functions
var interval = setInterval(function () {
  // expects a function as the first argument
  console.log("Ping!");
}, 500);

setTimeout(function () {
  // to stop the interval use clearInterval() method
  clearInterval(interval); // pass the interval variable
}, 2500);

// Transforming formats and values
var a = "5";
console.log(a);
console.log(parseInt(a)); // parseInt() is a window object and a global object

var a = "FBB123";
console.log(parseInt(a, 16)); // 16 means convert from decimal to hexadecimal

var b = 8;
console.log(b.toString());

var b = 2.9;
console.log(b.toFixed(2)); // toFixed rounds it and we have to specify the number of decimal places here as an argument

// string function
var string = "Any text";
console.log(string);
console.log(string.length);
console.log(string[2]); // access the element of the array
console.log(string.charAt(7)); // the charAt() function does the same thing
console.log(string.concat(" add a new string")); // use the concat() method and add a new string
console.log(string.toUpperCase());
console.log(string.split(" ")); // splitting the whitespace between "Any text"

var string = "Some text          ";
console.log(string.trim());

var string = "   Some text          ";
console.log(string.trim());
