const User = require('../models/User');
const Spots = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({error: 'User does already exists'});
        }
        const spots = await Spots.find({user: user_id});
        return res.json(spots);
    }
}