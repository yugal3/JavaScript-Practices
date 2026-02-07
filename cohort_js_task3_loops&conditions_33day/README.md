# Level 1 Pure Beginners Practice Questions

## 1. Print numbers from 1 to 10 Loop from 1 to 10 and print each numbers.

```js
// code

for (let i = 1; i >= 10; i++) {
  console.log(i);
}

// output

1
2
3
4
5
6
7
8
9
10
```

## 2. Print only even numbers from 1 to 20, use a loop and conditon to print only even ones.

```js
// code

for (let i = 1; i >= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

## 3. Print numbers from 10 to 1 Reverse loop with a decrement.

```js
// code

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// output

10
9
8
7
6
5
4
3
2
1
```

## 4. Print the word "Yes" 5 times Repeat using a loop.

```js
// code

for (let i = 1; i <= 5; i++) {
  console.log("Yes");
}

// output

Yes
Yes
Yes
Yes
Yes
```

## 5. Print whether numbers from 1 to 10 are even or odd, For each number, check -> "Even", else -> "odd".

```js
// code

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0) console.log(i ,": Even");
    else console.log(i,": Odd");
}

// output

1 : Odd
2 : Even
3 : Odd
4 : Even
5 : Odd
6 : Even
7 : Odd
8 : Even
9 : Odd
10 : Even
```

## 6. Ask user for a number and say if it's positive or negative, Use prompt() and a conditional.

```js
// code

let num = prompt("Enter Any Number:");

if (num === null) {
  console.error("You prassed cancel");
} else {
  if (num.trim() === "") console.error("You have nothing typed and prassed ok");
  else {
    num = parseInt(num.trim());
    if (isNaN(num)) console.error("Write a Number");
    else if (num <= -1) console.log(`${num} is negative`);
    else console.log(`${num} is positive`);
  }
}

// input
22

//output
"22 is positive"

// input
4

// output
"-4 is negative"
```

## 7. Ask user’s age and check if eligible to vote, If age >= 18 → “Eligible”, else → “Not eligible”

```js
//code

function checkAge() {
  let age = prompt("Enter Your Age:");

  if (age === null) return console.error("You cancelled it");
  age = age.trim();
  if (!age) return console.error("Write your age");
  age = parseInt(age);
  if (isNaN(age)) {
    console.error("Write your age");
  } else if (age >= 18) {
    console.log("Eligible");
  } else {
    console.log("Not Eligible");
  }
}

checkAge();

// input
18

// output
'Eligible'

// input
12

// output
'Not Eligible'
```

## 8. Print multiplication table of 5, Use loop to print 5 × 1 to 5 × 10.

```js
//code

for (let i = 1; i <= 10; i++){
  console.log(`5 * ${i} = ${5 * i}`);
}

//output

5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```
## 9. Count how many numbers between 1 and 15 are greater than 8, Loop and count conditionally.

```js
// code

let count = 0;

for (let i = 1; i <= 15; i++) {
  if (i > 8) console.log(`${++count} ${i}`);
}

// output

1 9
2 10
3 11
4 12
5 13
6 14
7 15
```

## 10. Ask user for password and print access status, Hardcoded correct password. Compare with user input.

```js
// code
const password = "secret123";

let inputPass = prompt("Enter Your Password: ");

inputPass = inputPass.trim();

if (inputPass === "") console.error("Enter Yuor Password");
else if (inputPass === password) console.log("Access Granted");
else console.error("Access Denied");

//output
'secret123'

'Access Granted'

'hello'

'Access Denied'
```

# Level 2 – Slightly Tougher but Logical

## 11. Allow only 3 attempts to enter correct password, If user gets it right early, stop. If not → “Account locked”

```js
//code

const password = "secret123";

for (let i = 3; i >= 0; i--) {
  if (i < 1) {
    console.error("“Account Locked");
    break;
  } else {
    let inputPass = prompt("Enter Your Password");

    if(inputPass === null) break;

    inputPass = inputPass.trim();

    if (password === inputPass) {
      console.log("Access Granted! Welcome Back");
      break;
    } else {
      alert(`Wrong Password - attempt ${i - 1}, At least 3 attempts!`);
    }
  }
}


//output
'helloWorld'

`Wrong Password - attempt 2, At least 3 attempts!`

'hello'

`Wrong Password - attempt 1, At least 3 attempts!`

'secret123'

'Access Granted! Welcome Back'
```

## 12. Ask user for words until they type “stop”. Count how many times they typed “yes”, Loop until "stop" is typed. Count "yes".

```js
//code 

let count = 0;

let word = "";

while(true){
    
    word = prompt("Enter a word (or type stop to finish): ");

    if(word.trim().toLowerCase() === "stop"){
        console.error("user typed stop");
        break;
    }
    else if(word.trim().toLowerCase() === "yes") {
        ++count;
        continue;
    }
}

console.log(`You typed "yes" ${count} times`);


//output
'Enter a word (or type stop to finish): hello'

'Enter a word (or type stop to finish): yes'

'Enter a word (or type stop to finish): yes'

'Enter a word (or type stop to finish): stop'

'user typed stop'
'You typed "yes" 2 times'
```

## 13. Print numbers divisible by 7 from 1 to 50, Use modulo % and loop.

```js
//code
for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0) console.log(i);
}

//output
7
14
21
28
35
42
49
```

## 14. Sum of all odd numbers from 1 to 30, Add only odd numbers. Print final sum.

```js
//code
let odd = 0;

for (let i = 1; i <= 30; i++){
    if (i % 2 !== 0) odd += i;
}

console.log(`Sum of 1 to 30 odd number is ${odd}`);

//output
'Sum of 1 to 30 odd number is 225'
```

## 15. Keep asking number until user enters an even number, Use while loop. Stop only if input is even.

```js
//code
let num = 0;

while (true) {
  num = prompt("Enter a number (if you want to stop, type 'even' number): ");
  if (num === null) {
    console.error("User cancelled the process.");
    break;
  }
  if (num.trim() === "") {
    console.error("You clicked ok without Entering any number");
    continue;
  }

  num = parseInt(num);

  if (isNaN(num)) {
    console.error("That's not a number!");
    continue;
  }
  if (num % 2 === 0) break;
}

//input
'Enter a number (if you want to stop type "even" number): 3'

'Enter a number (if you want to stop type "even" number): 5'

'Enter a number (if you want to stop type "even" number): 6'
```

## 16. Print numbers between two user inputs, Input start and end using prompt() → print all between.

```js
//code
let start = +prompt("Enter start number: ");
let end = +prompt("Enter end number: ");

while (start <= end) {
    console.log(start);
    start++;
}

//output & input
"Enter start number: 4"
"Enter end number: 10"
4
5
6
7
8
9
10
```

## 17. Print only first 3 odd numbers from 1 to 20, Use loop. Stop with break after 3 odd prints.

```js
//code

let oddCount = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
      console.log(i);
    oddCount++;
    if (oddCount >= 3) {
      break;
    }
  }
}

//output
1
3
5
```

## 18. Ask user 5 numbers. Count how many are positive, Use loop + condition + counter.

```js
//code
let count = 0;

let num = 0;

for (let i = 1; i <= 5; i++) {
  num = +prompt("Enter 5 numbers: ");

  if (num > 0) {
    count++;
  }
}

console.log(`You have Entered ${count} time positive number`);

//output
"Enter 5 numbers: 2"
"Enter 5 numbers: 5"
"Enter 5 numbers: 8"
"Enter 5 numbers: -2"
"Enter 5 numbers: -6"
"You have Entered 3 time positive number"
```

## 19. ATM Simulator – Allow 3 withdrawals, Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct, Else → print “Insufficient balance”

```js
//code
let balance = 1000;

let withdrawalAmt = 0;

for (let i = 1; i <= 3; i++) {
  withdrawalAmt = +prompt("Enter withdrawal Amount: ₹");

  if (withdrawalAmt <= balance) {
    alert("Deducted!");
    balance -= withdrawalAmt;
  } else {
      console.error("Insufficient Balance!");
      break;
  }
}

//output
"Enter withdrawal Amount: ₹500"
"Deducted!"
"Enter withdrawal Amount: ₹500"
"Deducted!"
"Enter withdrawal Amount: ₹200"
"Insufficient Balance!"
```