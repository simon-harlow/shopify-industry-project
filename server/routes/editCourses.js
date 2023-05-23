const express = require('express');
const router = express.Router();

const { readDetailedData, addMod, addLessons, findModuleIndex } = require('../utils/helpers');


// Express route handler with URL: '/editMod' and a handler function
router
    .get('/', (req, res) => {res.status(200).send(readDetailedData());})
    .post('/', (req, res) =>{const { name, start} = req.body;
        addMod(name, start);
        res.status(201).end();
    })
    .post('/addlessons', (req, res) =>{const { lesson, name} = req.body;
        addLessons(lesson, name);
        let detailedData = readDetailedData();
        let search = name;
        search = search.replace( /[^0-9](?=[0-9])/g, '$& ');
        let moduleIndex = findModuleIndex(search);
        res.status(201).send(detailedData[moduleIndex].lessons);
    })
    .get('/:name/:start', (req, res) =>{
        const {name, start} = req.params;
    let detailedData = readDetailedData();
    let search = name;
    search = search.replace( /[^0-9](?=[0-9])/g, '$& ');
    let moduleIndex = findModuleIndex(search);
    res.status(201).send(detailedData[moduleIndex].lessons);
    })
    .post('/:name/:start/', (req, res) =>{
        const { task, lessonName} = req.body;
        const {name, start} = req.params;
        addTask(task, lessonName);
        let detailedData = readDetailedData();
        let search = name;
        search = search.replace( /[^0-9](?=[0-9])/g, '$& ');
        let moduleIndex = findModuleIndex(search);
        res.status(201).send(detailedData[moduleIndex].lessons);
    })
    


module.exports = router;