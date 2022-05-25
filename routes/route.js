const express = require('express')
const router = express.Router()

let {products,people} = require('../data')

router.get('/', (req,res) => {
    res.status(200).json({success: true, data: people})
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((somebody) => somebody.id === Number(id))
    if (!person) {
        res.status(400).json({success:false, msg: `there is no user with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    return res.json(newPeople)
})

router.post('/', (req,res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({success:false, msg: 'please provide a name'})
    }
    res.status(201).send({success:true, person: name})
})

module.exports = router
