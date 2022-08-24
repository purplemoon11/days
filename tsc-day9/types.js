var myName = "ma hari bahadur";
console.log(myName);
function greet(name) {
    console.log('Hello, ' + name.toUpperCase() + "!!");
}
greet("ma hari bahadur");
function getYourNumber() {
    return 26;
}
//Object types
function printCoord(pt) {
    console.log("The number is ".concat(pt.x));
    console.log("The number is ".concat(pt.y));
}
printCoord({ x: 3, y: 4 });
function thisName(person) {
    var happy = "Ma ".concat(person.name, ", varkhar ").concat(person.age, " pugey");
    console.log(happy);
}
thisName({ name: "Hari Bahadur", age: 16 });
//object with optional params
//optional chaining stops the execution when no property or object is passed
function printName(obj) {
    console.log("".concat(obj.first, " ").concat(obj.last));
}
printName({ first: "Bob" });
printName({ first: "Bob", last: "Allison" });
//Union Type
function printId(id) {
    console.log("your id is ".concat(id));
}
printId(420);
printId("420");
function printGarau(pt) {
    console.log("The number is ".concat(pt.x));
    console.log("The number is ".concat(pt.y));
}
printGarau({ x: 1, y: 2 });
