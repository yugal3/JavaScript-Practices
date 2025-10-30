# JavaScript Operators

## 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)

a. Create two numbers a = 10 and b = 3.
Perform and log: a + b, a - b, a \* b, a / b, a % b.

```js
const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// output

13;
7;
30;
3.3333333333333335;
1;
```

b. Write: let x = 5; x = x + 3;
Now rewrite the same using +=.
Do the same for -=, \*=, /=.

```js
let x = 5;
x = x + 3;
console.log(x);

x += 3;
console.log(x);

x -= 3;
console.log(x);

x *= 3;
console.log(x);

x /= 3;
console.log(x);

// output

8;
11;
8;
24;
8;
```

c. let count = 5;
Use count++ and log value before and after.
Repeat for count–.

```js
let count = 5;

//before
console.log(count++);

//after
console.log(count);

//before
console.log(count--);

//after
console.log(count);

// output

5;
6;
6;
5;
```

d. Compare two values: 5 == “5” and 5 === “5”.
Observe difference.

```js
5 == "5";
// This will give true because it compare value only.

//output'
true;

5 === "5";
/* This one will give false because strict equallity opeator 
compare value's data type and value, that's why it gives false.*/

//output
false;
```

e. Check if 10 is greater than 5, less than 20, and equal to 10.

```js
console.log(10 > 5);
console.log(10 < 20);
console.log(10 === 10);

//output
true;
true;
true;
```

f. Try logical AND and OR:
true && false
true || false
!(true)

```js
console.log(true && false);
console.log(true || false);
console.log(!true);

//output
false;
true;
false;
```

g. Predict the result of:
(5 > 3 && 10 > 8),
(5 > 3 || 10 < 8)

```js
console.log(5 > 3 && 10 > 8);
console.log(5 > 3 || 10 < 8);

//output
true;
true;
```

h. Bitwise (light intro):
Evaluate 5 & 1 and 5 | 1.
Write result and your observation (no deep explanation needed now).

```js
5 & 1 -> 1
5 | 1 -> 5
```

- & (AND) gives bits common in both numbers.

- | (OR) combines bits from either number.

- convert to binary:

```js
5 → 101
1 → 001
```

- &(AND): Compare each bit position:
  Only the last bit is 1 in both, so result = 1

```js
  101   (5)
& 001   (1)
  ----
  001   → 1
```

- |(OR): Compare each bit position:
  OR keeps 1 wherever either bit is 1, result = 5

```js
  101   (5)
| 001   (1)
  ----
  101   → 5
```

## 2. Variable Hoisting in JavaScript

a. Predict output of:
console.log(a);
var a = 10

```js
//output
undefined;
```

b. Predict output of:
console.log(b);
let b = 10

```js
ReferenceError: Cannot access 'b' before initialization
```

c. Predict output of:
test()
function test() { console.log(“Hello”) }

```js
//output
"Hello";
```

d. Try writing a function expression before initialization and call it:
hello()
var hello = function() { console.log(“Hi”) }
Write what happened and why.

```js
app.js:109 Uncaught TypeError: hello is not a function at app.js:109:1
```

- During hoisting, the var hello declaration is moved to the top, but its assignment isn’t. So before initialization, hello exists but has the value undefined. When you call hello() before the assignment, you’re basically doing undefined(), so that is why an error occured.

e. Write one sentence:
What gets hoisted?
What does not get hoisted fully?

**Ans:** Function declarations and variable declarations get hoisted;
variable initializations and function expressions do not get hoisted fully.

## 3. Conditional Operators (if, else, else-if, ternary, switch)

a. Take input using prompt for age.
If age > 18 → log “Adult”.
Else → log “Minor”.

```js
const age = prompt("Age?");
if (Number(age) > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

b. Write a program:
If marks >= 90 → “A grade”
Else if marks >= 75 → “B grade”
Else if marks >= 50 → “C grade”
Else → “Fail”

```js
const marks = Number(prompt("Marks?"));

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}
```

c. Create a variable city = “Bhopal”.
If city is “Bhopal” → log “MP”
Else if city is “Delhi” → log “Capital”
Else → log “Unknown City”

```js
const city = prompt("Enter City name in CapitalCase:");

if (city === "Bhopal") {
  console.log("MP");
} else if (city === "Delhi") {
  console.log("Capital");
} else {
  console.log("Unknown City");
}
```

d. Use ternary operator:
Let score = 40.
If score > 35 → “Pass” else “Fail” using a ternary.

```js
let score = 40;
const result = score > 35 ? "Pass" : "Fail";

console.log(result);

//output
("Pass");
```

e. Convert this if-else into a ternary:
if (temperature > 30) { “Hot” } else { “Pleasant” }

```js
const result = temperature > 30 ? "Hot" : "Pleasant";
```

f. Write a switch case:
Take day number (1 to 7).
Print the day name.
Default case: “Invalid Day”.

```js
const dayNum = Number(prompt("Day Number?"));

switch (dayNum) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}
```

g. Using logical operators in condition:
If age > 18 and country == “India” → log “Eligible for Vote”
Else → “Not Eligible”

```js
const age = 19;
const country = "India";

if (age >= 18 && country === "India") {
  console.log("Eligible for Vote");
} else {
  console.log("Not Eligible");
}
```
