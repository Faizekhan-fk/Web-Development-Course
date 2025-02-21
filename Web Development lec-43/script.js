let a = prompt("enter the number")

let b = prompt("enter the second number")

if (isNaN(a) || (isNaN(b)))  {
    throw new Error("Sorry this is not allowd");
    
    
}

let sum = parseInt(a) + parseInt(b)

let x = 1

try {
    
    console.log("Then sum is", sum*x);
    
} catch (error) {
    console.log("Error Show now");
    
}

finally {
    console.log("Enter The File ");
    
}
