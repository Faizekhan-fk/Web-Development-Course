const express = require('express')
const blog = require('./router/blog')
const shop = require('./router/shop')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("its a get request");
    res.send('khan')
})

app.post('/', (req, res) => {
    console.log("its a post request");
    res.send('this is post')
})

app.put('/', (req, res) => {
    console.log("its a Put request");
    res.send('this is Put')
})

app.get('/index', (req, res) => {
    console.log("its a index request");
    res.sendFile('templates/index.html', {root: __dirname})
})

// app.delete('/', (req, res) => {
//     console.log("its a delete request");
//     res.send('this is delete')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})