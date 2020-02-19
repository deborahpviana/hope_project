const mongoose = require('mongoose');

const Card = mongoose.model('Card');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const cards = await Card.paginate({}, { page, limit: 10 });
        
        return res.json(cards);
    },

    async show(req, res) {
        const card = await Card.findById(req.params.card_id);

        if(!card) {
            res.status(400).json({ error: "Card not Found"})
        }

        return res.json(card);
    },

    async store(req, res) {
        const card = await Card.create(req.body);

        return res.json(card);
    },

    async update(req, res) {
        const card = await Card.findByIdAndUpdate(req.params.card_id, req.body, { new: true });

        if(!card) {
            res.status(400).json({ error: "Card not Found"})
        }

        return res.json(card);
    },

    async destroy(req, res) {
        const card = await Card.findByIdAndRemove(req.params.card_id);

        if(!card) {
            res.status(400).json({ error: "Card not Found"})
        }

        return res.send();
    },
     
}