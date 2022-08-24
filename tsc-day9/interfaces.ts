// An interface declaration is another way to name an object type

interface Point{
    eutaNumber : Number;
    arkoNumber : Number;
}

function abaPrintGarau(eutaArgument: Point){
    console.log(`The number is ${eutaArgument.eutaNumber}`);
    console.log(`The number is ${eutaArgument.arkoNumber}`);
}

abaPrintGarau({eutaNumber:100, arkoNumber:200})

//with extends
//common interface
interface Vehicle{
    wheels: number;
};


interface Car extends Vehicle{
    seat: number,
};

interface Motercycle extends Vehicle{
    headlight: number | string
}

const car: Car = {
    wheels: 4,
    seat: 5
}

const bike: Motercycle = {
    wheels: 4,
    headlight: 1,
}


type Person1 ={
    name: string;
}
type Person1 = {
    age: 18;
}

