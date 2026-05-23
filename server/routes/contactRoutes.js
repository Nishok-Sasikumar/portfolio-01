const express = require('express');
const { validateContact } = require('../middleware/validator');
const { rateLimiter } = require('../middleware/rateLimiter');
const { submitContact } = require('../controllers/contactController');

const router = express.Router();

router.post('/', rateLimiter, validateContact, submitContact);

module.exports = router;
