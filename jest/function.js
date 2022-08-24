const data = {
    add: (num1, num2)=> num1 + num2,
    isNull: ()=> null,
    checkValue: x=>x,
    createUser: ()=> {
        const user = {firstName: 'Hello'};
        user['lastName'] = "World";
        return user; 
    }
    }

    module.exports = data;