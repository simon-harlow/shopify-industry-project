const fs = require('fs'); 

const readDetailedData = () =>{
    const notesJSON = fs.readFileSync("./data/Makemodules.json");
    const parsedNotes = JSON.parse(notesJSON);
    return parsedNotes;
}


const makeMod = (name, start) =>{
    let lessons=[];
    const mod =
    {
        name, 
        start,
        lessons,
    }
    return mod;
}

const addMod = (name, start) =>{
    const createdMod = makeMod(name, start);
    const detailedData = readDetailedData();
    detailedData.push(createdMod);
    fs.writeFileSync('./data/Makemodules.json', JSON.stringify(detailedData, null, 2));
}

const findModuleIndex = (moduleName) => {
    const detailedData = readDetailedData();
    const id = detailedData.findIndex(mod =>{
        return mod.name == moduleName;
    });
    return id;
}

const addLessons = (lesson, name) =>{
    let moduleIndex = findModuleIndex(name); 
    const detailedData = readDetailedData();
    detailedData[moduleIndex].lessons.push(lesson);
    return fs.writeFileSync('./data/Makemodules.json', JSON.stringify(detailedData, null, 2));
}


module.exports = {
    readDetailedData,
    findModuleIndex,
    addLessons,
    addMod,
    resolve: {
        extensions: ['.js', '.jsx']
    }
};