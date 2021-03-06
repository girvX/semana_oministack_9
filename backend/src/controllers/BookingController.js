const Booking = require('../models/Booking');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({error: 'User does already exists'});
        }

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        });
        await booking.populate('user').populate('spot').execPopulate();

        const ownerSocket = req.connectedUsers[booking.spot.user];

        if (ownerSocket) {
            req.io.to(ownerSocket).emit('booking_request', booking)
        }

        return res.json(booking)
    }
}