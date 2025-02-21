let students = ["fk", "khan", "farhan", "tahir", "ghori", "shah", "abdullah", "faize", "Ghous", "moon sheikh", "shoaib"] 


let houses = []

for await (const student of students) {
    if(student.length < 6) {
        houses.push("greyffinder")
    }
    else if(student.length < 8){
        houses.push("Hufflepuff")
    }
    else if(student.length < 12){
        houses.push("Revenclaw")
    }
    else{
        houses.push("slythrin")
    }
}

console.log(houses)