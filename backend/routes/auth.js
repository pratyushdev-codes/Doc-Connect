const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// Create user using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be at least of length 5').isLength({ min: 5 }),
], async (req, res) => {
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether the user with the same email exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ error: "E-mail already in use" });
    }

    try {
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
