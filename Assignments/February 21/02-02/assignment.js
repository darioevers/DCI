// OBJECTS

// old life with no objects:
let firstName = "Dario";
let lastName = "Evers";
let userAge = 26;

// OBJECTS
// Object Literal
// const <name> = { <key1>: <value1>, ...}
// The whole thing is called property. key:value!

const obj = {
  1: "Dario",
  2: "Kid",
  3: "Cudi",
};

const objUser = {
  name: "Ercan",
  lastName: "Erdagi",
  age: 24,
  address: "Pinneberg",
  activity: ["Work", "Eat", "Drink", "Repeat"],
  young: true,
};
console.log(objUser.name);
console.log(objUser.activity[2]);
console.log(typeof console);

// Accessing properties
// 1- with (brackets notation)
console.log(objUser["activity"][2]);

// 2- with (dot notation)
console.log(objUser.activity[2]);
console.log(objUser.name);

// not pre-filled object
const obj2 = {};
obj2.name = "Dario";
console.log(obj2.name);

//
const save = new Object();
console.log(save);
const arr = new Array();
console.log(arr);

// output of an object in a loop
for (let properties in objUser) {
  console.log(`objUser.${properties} : ${objUser[properties]}`);
}
