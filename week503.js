function show() {
    // const student = ["Mark", "Elon", "Jeff"]
    const student = [
        { Name: "Mark", Age: 18, ID: 101 },
        { Name: "Jeff", Age: 19, ID: 102 },
        { Name: "Bill", Age: 16, ID: 103 }
    ]
    return student
}

let showInfo = show()
console.log(showInfo)
/*
let i = 0;
    for (const m in showInfo) {
        console.log(`${i} ${showInfo[m]}`)
        i++
    }
    for (let i = 0; i < showInfo.length; i++) {
    //console.log(`${showInfo[i]}`)
    }
*/