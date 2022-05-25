const express = require('express')
const app = express()

app.use(express.static('../new-app'))

app.get('/', (req, res) => {
    console.log('server started!!!');
}).listen(4000)