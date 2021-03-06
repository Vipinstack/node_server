const express = require('express')
const router = express.Router()
const models = require('../db/models');


// get all quiz questions
router.get('/questions', (req, res) => {

})

// get one quiz question
router.get('/questions/:id', (req, res) => {

})

// create one quiz question
router.post('/questions', async (req, res) => {
    try {
   
        const   results  = req.body

        const question = await Question.create({
           
            results
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }


})

// update one quiz question
router.put('/questions/:id', (req, res) => {

})

// delete one quiz question
router.delete('/questions/:id', (req, res) => {

})

module.exports = router