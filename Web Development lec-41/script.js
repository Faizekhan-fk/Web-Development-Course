// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData() {
    let c = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await c.json()
    console.log(data);
    
}


async function main() {

    console.log("Loading Modules")

    console.log("Do something else")

    let data = await getData()

    console.log(data)

}

main()



// data.then((v) => {

//     console.log(data);

//     console.log("process Data");

// })
