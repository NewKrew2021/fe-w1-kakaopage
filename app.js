const express = require('express')
const app = express()
const port = 3000

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.render('dummyPage', {
        page: req.path.split('/')[1]
    })
})
app.get('/home', (req, res) => {
    res.render('dummyPage', {
        page: req.path.split('/')[1]
    })
})
app.get('/webtoon', (req, res) => {
    res.render('index', {
        page: req.path.split('/')[1]
    })
})
app.get('/webnovel', (req, res) => {
    res.render('dummyPage', {
        page: req.path.split('/')[1]
    })
})
app.get('/movie', (req, res) => {
    res.render('dummyPage', {
        page: req.path.split('/')[1]
    })
})
app.get('/broadcast', (req, res) => {
    res.render('dummyPage', {
        page: req.path.split('/')[1]
    })
})
app.get('/book', (req, res) => {
    res.render('dummyPage', {
        page: req.path.split('/')[1]
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
