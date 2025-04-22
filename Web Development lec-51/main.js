const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About us')
})

app.get('/contact', (req, res) => {
  res.send('Contact us')
})

app.get('/blogs', (req, res) => {
  res.send('Blogs')
})


app.get('/blogs/:slug', (req, res) => {
  // logic to fetch {slug} from the database
  res.send(`hello ${req.params.slug}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})