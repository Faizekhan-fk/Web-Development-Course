const { error } = require("console");
const fs = require("fs")


console.log("starting");
// fs.writeFileSync("Faize.text", "Faize is Nodejs Developer")
fs.writeFile("Faize.text2", "This is good",()=>{
    console.log("done");
    fs.readFile("Faize.text2", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("Faize.text", "Faizekhan", (e, d)=>{
    console.log(d);
    
})


console.log("ending");

