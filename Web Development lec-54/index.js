const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let sitename = "tech.fk"
    let searchtext = "Search now"
    let arr = [1, 2, 3]
  res.render("index", {sitename: sitename, searchtext: searchtext, arr})
})


app.get('/blog/:slug', (req, res) => {

let blogTitle = "Tech Fk why and when?"
let blogContent = "that is very best software house"

  res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})