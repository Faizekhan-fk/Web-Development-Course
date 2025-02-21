function nice(name) {
    console.log("Hey " + name + " you are nice")
    console.log("Hey " + name + " you are Developer")
    console.log("Hey " + name + " you are Powrfull")
    console.log("Hey " + name + " you are great")
}

nice("Faize")


function sum(a, b, c = 3) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(5, 12)
result2 = sum(11, 12)
result3 = sum(8, 12)

console.log("the sum of these number is: ", result1)
console.log("the sum of these number is: ", result2)
console.log("the sum of these number is: ", result3)