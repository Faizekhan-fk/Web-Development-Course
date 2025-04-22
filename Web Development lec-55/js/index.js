

import fs from "fs/promises"
import fsn from "fs"
import path from "path";



const pathbase = "C:\\Sigma Web Development Course\\Web Development lec-55"

let files = await fs.readdir(pathbase)

for (const item of files){
    let ext = item.split(".")[item.split(".").length - 1]
    if(fsn.existsSync(ext)){
        // move the files to the directory
        fs.rename(path.join(pathbase, item), path.join(pathbase, ext, item))
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item);
    
}