//Define Object
const users = {
    "name": "Mark",
    "address":"57/8 Aveneu",
    "age":25
}

//Define Function 
function showUser({name,age}){
    console.log(`${name} is ${age} year old!`)
}

//Call Function 
showUser(users)