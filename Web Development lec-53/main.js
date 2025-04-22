const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')


app.use('/blog', blog)


// app.use(express.static("public"))

//middleware one
app.use((req, res, next) => {
    console.log(req.headers)
    req.faize = "i am Fk"
    fs.appendFileSync("logs.text", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
  })

//middleware two
  app.use((req, res, next) => {
    console.log("m2")
    req.faize = "i am Fk"
    next()
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.send('Hello about!')
})


app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
