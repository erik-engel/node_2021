// create a function called myFirstFunction that retuyrns a greeting of sorts

function myFirstFunction() {
    return "Hello";
}

console.log(myFirstFunction());


const myVariableFunction = function () {
    console.log("Hello there from the anonymous function")
};

myVariableFunction();

//arrow functions declare the "this" keyword differently, binds it to the scope of the function
const myArrowFunction = () => {
    console.log("Hello there from the anonymous function that's also an arrow function.");
};

// callbacks

function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // takes some time ...
    // and more time ...
    anyFunctionReference();
}

function helloThere() {
    console.log("Hi")
}

const hiAgain = () => {
    console.log("Hello")
};

sayHiLater(helloThere);
sayHiLater(hiAgain);

function interact (genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = name => {
    return "Poke " + name;
};

interact(poke, "Donald Frunk");

// Call interact
// interact should call a poke function and the poke function should say something like: "Poke " + name

// hug someone by calling interact and dot it all in one line
// example: "Hug " + name where name is Napster for instance

const hug = name => "Hug " + name;

interact(hug, "Napster");
 
// Same as above, but in one line

interact(name => "Hug " + name, "Napster");