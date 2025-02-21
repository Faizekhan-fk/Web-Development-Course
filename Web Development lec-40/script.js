console.log("Faize Hakker")
console.log("Fk Hakker")

setTimeout(() => {
    console.log("i am inside settimeout")
}, 0);

console.log("The End")


const fn = (params) => {
    console.log("Nothing")
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (scr, callback) => {
    let sc = document.createElement("script");
    sc.src = scr;
    sc.onload = callback("faize", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)