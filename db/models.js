const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({

   
    results: [
        {
            category: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true,
                default: false
            },
            question: {
                type: String,
                required: true
            },
            correct_answers: {
                type: String,
                required: true
            },
            incorrect_answers: [
                { type: String,
                  required: true
                }
               
            ],

            

        }
    ]
})
   
module.exports = mongoose.model('Question', QuestionSchema)