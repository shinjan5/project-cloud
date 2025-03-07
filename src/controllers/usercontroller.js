const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send('User registered successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;

