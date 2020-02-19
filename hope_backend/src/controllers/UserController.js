const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        // Paginação
        const { page = 1 } = req.query;
        const users = await User.paginate({}, { page, limit: 10 });
        
        // const users = await User.find();
        return res.json(users);
    },

    async show(req, res) {
        // console.log(req.params.id)
        const user = await User.findById(req.params.user_id);

        if(!user){
            res.status(400).json({ error: "User not Found" });
        }

        return res.json(user);
    },

    async store(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.user_id, req.body, { new: true });

        if(!user){
            res.status(400).json({ error: "User not Found" });
        }

        return res.json(user);
    },

    async destroy(req, res) {
        const user = await User.findByIdAndRemove(req.params.user_id);

        if(!user){
            res.status(400).json({ error: "User not Found" });
        }

        return res.send();
    },
     
}