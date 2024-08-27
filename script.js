// console.log("Hello world!");
// "use strict"; // Treats all JS code as Newer Version
// // alert(5+5); // We are using nodejs , not browser

// let name = "Sonu Singh";
// let age = 21;
// let isUserLogin = false;
// let state;
// let template = null;

// console.log(typeof undefined) // Undefined
// console.log(typeof null) // Object


// 3. DataType Conversion Confusion

// let score = 33;
// let score1 = "33";
// let score3 = true;
// let score2 = undefined;
// let score4 = null;
// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// console.log(typeof score)
// console.log(typeof score1)
// console.log(Number(score3))
// console.log(Number(score1))
// console.log(Number(score2))
// console.log(Number(score4))

// Operation 
// let value = 3;
// let negValue = -value;
// console.log(value)

// Comparision of data types

// console.log("2" > 1);
// console.log("0.2" > 1);
// console.log(null > 0)
// console.log(null == 0)
// console.log(null === 0)
// console.log(null >=0)
// console.log(null <= 0)

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);

// ===

// console.log("1" === 1)

// let name = "sonu";
// let raponumber  = 50;

// console.log(name + raponumber + " Ram") // Older
// console.log(`my name is ${name} and my rapo cout is ${raponumber}`); // Newer

// Declaration of Sring

// const gameName = new String("Call of Duty l");

//access of sring

// console.log(gameName);
// console.log(gameName[6]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("l"));

// Number and Math functions

// ++++++++++++++++++++++++++Number +++++++++++++++++++++++++++++

// const scroe = 34343;

// const balance = new Number(2342); // Only Nubmer Defined
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber = 34343.3434343

// console.log(otherNumber.toPrecision(5))

// const handresds = 1000000000000000000
// console.log(handresds.toLocaleString("en-IN"))

//++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4)); // Neagarive to Positive
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.4))
// console.log(Math.min(4,4,7))
// console.log(Math.random())
// console.log(Math.floor((Math.random()*10) + 1))

let min = 10;
let max = 20;

console.log(Math.floor((Math.random() * ((max- min) +1) + min)))