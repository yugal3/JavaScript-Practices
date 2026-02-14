# Level 1 – Basic Function, Array & Object Code Tasks (Easy)

## 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

```js
function sayHello() {
  console.log("Hello JavaScript");
}

sayHello();

// output
"Hello JavaScript"
```

## 2. Create a function `add(a, b)` that returns their sum and log the result.

```js
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

// output
8
```

## 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

```js
function greet(name = "Guest") {
  console.log(`Hi ${name}`);
}

greet();
greet("JavaScript");

// output
"Hi Guest"
"JavaScript"
```

## 4. Use rest parameters to make a function that adds unlimited numbers.

```js
function addRest(...nums) {
  return nums.reduce((acc, num) => num + acc, 0);
}

console.log(addRest(1, 4, 5, 7));

// output
17
```

## 5. Create an IIFE that prints `"I run instantly!"`.

```js
(function () {
  console.log("I run instantly");
})();

// output
"I run instantly"
```

## 6. Make a nested function where the inner one prints a variable from the outer one.

```js
function outerFunc() {
  let num = 7;
  return function () {
    console.log(num);
  };
}

outerFunc()();

// output
7
```

## 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

```js
const arr = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log(`without any alter: ${arr}`);

arr.push("Pineapple");
console.log(`added a fruit at the end: ${arr}`);

arr.shift();
console.log(`removed a fruit from the beginning: ${arr}`);

// output
"without any alter: Apple, Banana, Orange, Mango, Grapes"
"added a fruit at the end:: Apple, Banana, Orange, Mango, Grapes, Pineapple"
"removed a fruit from the beginning: Banana, Orange, Mango, Grapes"
```

## 8. Use a `for` loop to print all elements of an array.

```js
const arr2 = ["a", "b", "c", "d", "e", "f"];
const arr2Len = arr2.length;

for (let i = 0; i < arr2Len; i++) {
  console.log(arr2[i]);
}

// output
"a"
"b"
"c"
"d"
"e"
"f"
```

## 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key’s value.

```js
const person = {
    name: "yugal",
    age: 22,
    city: "Tapkara"
}

for (const p in person) {
    console.log(p);
}

// output

"name"
"age"
"city"

// other way to extract keys from object.

const keys = Object.keys(person);

console.log(keys);

// output
["name", "age", "city"]
```

## 10. Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.

```js
setTimeout(() => {
    console.log(`Time’s up!`);
}, 2000);

// output
// printed after 2 sec
"Time's up!"
```

---

# Level 2 – Functional Thinking & Logic Tasks (Intermediate)

## 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

```js
function hf() {
  console.log("hello Js");
}

function runTwice(fn) {
  fn();
  fn();
}

runTwice(hf);

// output
"hello Js"
"hello Js"
```

## 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

```js
// pure func..

function pureFn(a, b) {
  console.log(a + b);
}

pureFn(3, 5);
pureFn(3, 5);

// output
8
8

// impure func...

let num = 3;

function impureFn(a) {
   num += a;
   return num;
}

console.log(impureFn(5));
console.log(impureFn(5));

// output
8
13
```

## 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

```js
const obj = {
  name: "Js",
  age: 30,
};

function destParameter({ name, age }) {
  console.log(name, age);
}

destParameter(obj);

// output
"Js" 30
```

## 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

```js
const obj2 = {
  name: "Js",

  sayHi: function () {
    console.log(`Normal Function: Hi ${this.name}`);
  },

  sayArrow: () => {
    console.log("Arrow Function: Hi", this.name);
  },
};

obj2.sayHi();
obj2.sayArrow();

// output
"Normal Function: Hi Js"
"Arrow Function: Hi" undefined
```

## 5. Given an array of numbers, use `map()` to create a new array where each number is squared.

```js
const arrNum = [1, 2, 3, 4, 5, 6, 7];

const sqArrNum = arrNum.map((num) => Math.pow(num, 2));
const sqArrNumWay2 = arrNum.map((num) => num ** 2);
const sqArrNumWay3 = arrNum.map((num) => num * num);

console.log(sqArrNum);
console.log(sqArrNumWay2);
console.log(sqArrNumWay3);

// output
[1, 4, 9, 16, 25, 36, 49]
[1, 4, 9, 16, 25, 36, 49]
[1, 4, 9, 16, 25, 36, 49]
```

## 6. Use `filter()` to get only even numbers from an array.

```js
const evenArrNum = arrNum.filter((num) => num % 2 === 0);

console.log(evenArrNum);

// output
[2,4,6]
```

## 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

```js
const salaries = [1000, 2000, 3000];

const totalSalary = salaries.reduce((acc, salary) => acc + salary);

console.log(`Total salary: ${totalSalary}`);

// output
"Total salary: 6000"
```

## 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

```js
const usernames = ["Sky", "DigitalNomad", "Neo", "QuantumCoder", "Jax"];

// some()
const someMethod = usernames.some((name) => name.length > 3);

console.log(someMethod);

// output
true

// every()
const everyMethod = usernames.every((name) => name.length > 3);

console.log(everyMethod);

// output
false
```

## 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.

```js
const sealUser = {
  name: "Js",
  age: 30,
};

console.log("Before Any Alter (seal): ", sealUser);


// Object.seal()

Object.seal(sealUser);

sealUser.age = 31;
sealUser.city = "Bihar";
delete sealUser.name;

console.log("seal: ", sealUser);


// Object.freeze()

const frozenUser = { name: "Monu", age: 15 };

console.log("Before Any Alter (freeze): ", frozenUser);

Object.freeze(frozenUser);

frozenUser.city = "California";
frozenUser.age = 14;
delete frozenUser.name;

console.log("freeze: ",frozenUser);

// output
"Before Any Alter (seal): " {name: "Js", age: 30}
"seal: " {name: "Js", age: 31}

"Before Any Alter (freeze):" { name: "Monu", age: 15 }
"freeze: " { name: "Monu", age: 15 }
```

## 10. Create a nested object (`user → address → city`) and access the city name inside it.

```js
const user1 = {
  id: 101,
  username: "Js",
  address: {
      pincode: 444559,
      city: "UP",
  },
};

console.log(user1?.address?.city);

const { address: { city } } = user1;

console.log(city);

// output
"UP"
"UP"
```