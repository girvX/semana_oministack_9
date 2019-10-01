const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const multer = require('multer');
const uplodConfig = require('./config/upload');


const routes = express.Router();
const upload = multer(uplodConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots/:spot_id/booking', BookingController.store);

routes.get('/dashboard', DashboardController.show);

module.exports = routes