//Aray Destructuring
const students = ["Mark","Elon","Jeff"]
const provinces = ["Trat","Chantaburi","Rayong","Chonburi","Bangkok","Prachinburi","Srakeaw"]
const countries = ["Thailand","Lao","Cambodia","Vietnam","Japan","Taiwan"]

//Destructuring Assignment
const [first,second,third] = students
const [pro1,,pro3,,pro5,,pro7] = provinces //Leave space for unpick elements
const [coun1,count2,...country] = countries //Rest Parameter

console.log(coun1)
console.log(count2)
console.log(country)

// console.log(pro1)
// console.log(pro3)
// console.log(pro5)
// console.log(pro7)