const express = require('express')
const app = express()
const people = require('./routes/route')

const { logger } = require('./middleware')

app.use(express.static('./express-app'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people', people)

app.post('/login', (req,res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    }
    // console.log(req.body);
    // res.send('POST')
})

app.listen(4000, () => {
console.log('sever has started at localhost:4000...');
})

// app.all('*', (req, res) => {
//     res.status(404).send(`<h1>Requested Resource Not Found</h1>`)
// })
