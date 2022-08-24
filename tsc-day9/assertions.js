var pizza = { name: "Blazing inferno", toppings: 5 };
var serealized = JSON.stringify(pizza);
function getNameFromJson(obj) {
    return JSON.parse(obj).name;
}
console.log(getNameFromJson(serealized));
