const express = require('express');
const router = express.Router();

const { readDetailedData, addMod, addLessons, findModuleIndex } = require('../utils/helpers');


// Express route handler with URL: '/editMod' and a handler function
router
    .get('/', (req, res) => {
        res.status(200).send(readDetailedData());})
    .post('/', (req, res) =>{const { name, start} = req.body;
        addMod(name, start);
        res.status(200).send(readDetailedData());
    })
    .post('/addlessons', (req, res) =>{
        const { lesson, name} = req.body;
        addLessons(lesson, name);
        let detailedData = readDetailedData();
        let moduleIndex = findModuleIndex(name);
        res.status(201).send(detailedData[moduleIndex].lessons);
    })
    .get('/:name/:start', (req, res) =>{
        const {name, start} = req.params;
        let detailedData = readDetailedData();
        let moduleIndex = findModuleIndex(name);
        res.status(201).send(detailedData[moduleIndex].lessons);
    })

module.exports = router;