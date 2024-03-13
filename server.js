require('./config/db')
const express = require('express')
// const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const schema = require('./models/schema')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const books = await schema.find()
    res.render('pages/home', { books })
})

app.get('/add', (req, res) => {
    res.render('pages/add')
})

app.post('/add', async (req, res) => {
    const data = req.body
    const newData = await schema(data)
    await newData.save()
    res.redirect('/')
})

app.get('/delete/:id', async(req, res) => {
    const { id } = req.params
    await schema.deleteOne({_id:id})
    res.redirect('/')
})

app.listen(8000, () => {
    console.log('listening on port', 8000)
})
