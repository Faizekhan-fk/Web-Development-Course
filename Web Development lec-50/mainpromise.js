import fs from "fs/promises"
let a = await fs.readFile("Faize.text")
let b = await fs.appendFile("Faize.text", "/n this is amaizing")
console.log(a.toString(), b);

