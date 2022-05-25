//express tutorial 1- Routes, 2- data-fetching & Queries,

const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/api/:prodId', (req, res) => {
    var {prodId} = req.params
    console.log(prodId);
    const singleProd = products.find((product) => product.price === Number(prodId))
    if (!singleProd) {
        res.status(404).send(`<h3>There no Items of -- $${prodId}<h3>`)
    } else {
        res.json(singleProd)
    }
    res.json(singleProd)
})

app.get('/api/v1/query', (req, res) => {
    const {prodName, limit} = req.query
    let query = [...products]
    if (prodName) {
        query = query.filter((product) => {
            return product.productName.startsWith(prodName)
        })
    }
    if (limit) {
        query = query.slice(0, Number(limit))
    }
    if (query < 1) {
        res.status(200).json({success: 'true', data: []})
    }
    res.status(200).json(query)
    res.send(query)
})

app.listen(4000, () => {
    console.log('sever has started at localhost:4000...');
})

app.all('*', (req, res) => {
    res.status(404).send(`<h1>Requested Resource Not Found</h1>`)
})