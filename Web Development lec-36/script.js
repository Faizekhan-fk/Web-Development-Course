console.log("hello")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children

// console.log(boxes)

function getrandomcolor() {
    let val1 = Math.ceil(0 + Math.random()* 220);
    let val2 = Math.ceil(0 + Math.random()* 220);
    let val3 = Math.ceil(0 + Math.random()* 220);
    return `rgb(${val1}, ${val2}, ${val3})`
};

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()
})