const User = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
            const user = await User.create(req.body);
            return res.json(user);
        } catch (error) {
            res.status(400).json({error})
        }
    }
}