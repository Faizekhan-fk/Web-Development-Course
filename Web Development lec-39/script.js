let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>yayy you were clicked</b> Enjoy your click"
})

button.addEventListener("contextmenu", ()=>{
    alert("dont hack us")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})