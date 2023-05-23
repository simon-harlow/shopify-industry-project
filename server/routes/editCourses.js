const express = require('express');
const router = express.Router();

const { readDetailedData, addMod } = require('../utils/helpers');


// Express route handler with URL: '/editMod' and a handler function
router
    .get('/', (req, res) => {res.status(200).send(readDetailedData());})
    .post('/', (req, res) =>{const { name, start} = req.body;
        addMod(name, start);
        res.status(201).end();
    });

module.exports = router;