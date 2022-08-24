type Pizza = {name: string, toppings: number};

const pizza: Pizza = {name:"Blazing inferno", toppings: 5};
const serealized = JSON.stringify(pizza);

function getNameFromJson(obj: string):string{
    return (JSON.parse(obj) as Pizza).name;
}
console.log(getNameFromJson(serealized));