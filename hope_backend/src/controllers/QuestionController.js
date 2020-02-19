const mongoose = require('mongoose');

const Question = mongoose.model('Question');

module.exports = {
    async index(req, res) {
        const questions = await Question.find();
        return res.json(questions);
    },

    async show(req, res) {
        const { question_id } = req.params.question_id;

        const question = await Question.findById(question_id);
        if(!question){
            res.status(400).json({ error: "Question not Found" });
        }

        return res.json(question);
    },

    async store(req, res) {
        const question = await Question.create(req.body);

        return res.json(question);
    },

    async update(req, res) {
        const question = await Question.findByIdAndUpdate(req.params.question_id, req.body, { new: true });

        if(!question){
            res.status(400).json({ error: "Question not Found" });
        }

        return res.json(question);
    },

    async destroy(req, res) {
        const question = await Question.findByIdAndRemove(req.params.question_id);

        if(!question){
            res.status(400).json({ error: "Question not Found" });
        }

        return res.send();
    },
     
}