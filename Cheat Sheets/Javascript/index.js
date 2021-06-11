// this is a comment in javascript

/* 
this is a 
multiline comment
in javascript
*/

// declare a variable like this
let myVariableName = "hello"

// log to the console like this
console.log("hello")
console.log(myVariableName)

// -------------------------------

/*
    Data Structures
*/

// undefined
let myUndefinedVariable

// string
let myDoubleQuoteStringVariable = "I'm a string"

// number
let myNumberVariable = 42

// boolean
let myBooleanVariable = true

// object
let myObjectVariable = {
  someNumberParameter: 23,
  someStringParameter: "",
  someBooleanParameter: true,
}
myObjectVariable.someNumberParameter // 23

// array
let myArrayVariable = [23, "I'm second", false]
myArrayVariable[0] // 23

// -------------------------------

/*
    Control Flow
*/

// function definition
function doubleParameter1(parameter1, parameter2) {
  console.log(parameter1, parameter2)

  return parameter1 * 2
}

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i)
}

//while loop
let i = 0

while (i < 10) {
  console.log(i)
  i++
}

//if - else if - else statement
let myRandomNumber = 23

if (myRandomNumber < 10) {
  console.log("less than 10")
} else if (myRandomNumber < 20) {
  console.log("less than 20")
} else {
  console.log("greater than 20")
}
