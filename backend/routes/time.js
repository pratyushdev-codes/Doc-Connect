
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
       a: "this",
       number: 45
    };
    res.json(obj);
 });
 





module.exports= router