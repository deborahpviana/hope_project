const mongoose = require('mongoose');

const Quiz     = mongoose.model('Quiz');
// const Question = mongoose.model('Question');

module.exports = {
    async index(req, res) {
        const quizzes = await Quiz.find();
        
        return res.json(quizzes);
    },

    async show(req, res) {
        const { quiz_type } = req.params.quiz_type;

        const quiz = await Quiz.find({ quiz_type });
        if(!quiz){
            res.status(400).json({ error: "quiz not Found" });
        }

        return res.json(quiz);
    },

    async store(req, res) {
        const { quiz_type, questions } = req.body;

        const quiz = await Quiz.create({ quiz_type, questions });
        return res.json(quiz);
    },

    async update(req, res) {
        const { quiz_type } = req.params.quiz_type;
        const { questions } = req.body;

        const quiz = await Quiz.findOneAndUpdate({ quiz_type }, { quiz_type, questions }, { new: true });

        if(!quiz){
            res.status(400).json({ error: "quiz not Found" });
        }

        return res.json(quiz);
    },

    async destroy(req, res) {
        const { quiz_id } = req.params.quiz_id;

        const quiz = await Quiz.findById(quiz_id);

        if(!quiz){
            res.status(400).json({ error: "quiz not Found" });
        }

        return res.send();
    },
     
}