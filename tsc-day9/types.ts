let myName: string = "ma hari bahadur";
console.log(myName);

function greet(name:String){
    console.log('Hello, '+ name.toUpperCase() + "!!")
}
greet("ma hari bahadur")

function getYourNumber():Number{
    return 26
}

//Object types
function printCoord(pt: {x:Number, y:Number}){
    console.log(`The number is ${pt.x}`);
    console.log(`The number is ${pt.y}`);
}
printCoord({x:3, y:4});

//type allias
type Person = {
    name: String;
    age: Number;
  };
   
  function thisName(person: Person) {
    const happy = `Ma ${person.name}, varkhar ${person.age} pugey`;
    console.log(happy)
  }
  thisName({name: "Hari Bahadur", age: 16});

  //object with optional params
  //optional chaining stops the execution when no property or object is passed
  function printName(obj: {first:String; last?:String}){
        console.log(`${obj.first} ${obj.last}`)
  }
  printName({first:"Bob"});
  printName({first:"Bob", last:"Allison"})

//Union Type
function printId(id:Number | String){
    console.log(`your id is ${id}`)
}
printId(420)
printId("420")

//Type allias
type hariBahadur = {
    x: Number;
    y: Number;
}
function printGarau(pt:hariBahadur){
    console.log(`The number is ${pt.x}`);
    console.log(`The number is ${pt.y}`);
}
printGarau({x:1, y:2})