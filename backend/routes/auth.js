const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // Corrected the spelling
const JWT_SECRET='websiteadminpratyush';
const jwt = require('jsonwebtoken');

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
        const salt = await bcrypt.genSalt(10); // Corrected the spelling
        const secPass = await bcrypt.hash(req.body.password, salt); // Corrected the spelling
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
 const data ={
    user:{
        id:user.id
    }
 }
        const jwtData = jwt.sign(data, JWT_SECRET);
        console.log(jwtData);
        res.json(user);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
