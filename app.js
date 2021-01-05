const express = require('express')
const app = express()
const port = 3000

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.render('index', {})
})
app.get('/home', (req, res) => {
    res.render('index', {})
})
app.get('/webtoon', (req, res) => {
    res.render('index', {})
})
app.get('/webnovel', (req, res) => {
    res.render('index', {})
})
app.get('/movie', (req, res) => {
    res.render('index', {})
})
app.get('/broadcast', (req, res) => {
    res.render('index', {})
})
app.get('/book', (req, res) => {
    res.render('index', {})
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
