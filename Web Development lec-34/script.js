console.log("Hello")

// let Webdeveloper = document.getElementsByClassName("box")
// console.log(Webdeveloper)

// Webdeveloper[2].style.backgroundColor = "Yellow"

// document.getElementById("center").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "Green"


console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

