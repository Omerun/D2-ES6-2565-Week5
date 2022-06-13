//Define Object
const users = [
    {
        "name": "Mark",
        "address": "57/8 Aveneu",
        "age": 25
    },
    {
        "name": "Elon",
        "address": "59/8 Aveneu",
        "age": 35
    },
    {
        "name": "Jeff",
        "address": "74/8 London",
        "age": 45
    }
]

for (let { name, address, age } of users) {
    console.log(`Name:${name} Adress:${address} Age:${age} years old`)
}

