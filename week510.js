// Define Object
let obj = { 'a': 1, 'e': { 'e1': 2 }, 'i': 3, 'o': 4, 'u': 5 }
// Destructuring Assignment
let { a, e, e: { e1 }, i, o, u } = obj

console.log(`
    a = ${a},e = ${e},e1 = ${e1}
    i = ${i},o = ${o},u =${u}
`)

let arr = [1, 2, 3, 4]
let [f, s, th, four] = arr
console.log(f, s, th, four)