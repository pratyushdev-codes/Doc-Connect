
const express = require('express');
const router = express.Router();

// Creating a user using POST: "/api/auth/."







router.get('/', (req, res) => {
console.log(req.body);
res.send(req.body);
 
 });
 





module.exports= router