const fs = require('fs'); 

const readDetailedData = () =>{
    const notesJSON = fs.readFileSync("./data/Makemodules.json");
    const parsedNotes = JSON.parse(notesJSON);
    return parsedNotes;
}


const makeMod = (name, date) =>{
    let lessons=[];
    const mod =
    {
        name, 
        date,
        lessons,
    }
    return mod;
}

const addMod = (name, date) =>{


    const createdMod = makeMod(name, date);
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
    let search = name;
    search = search.replace( /[^0-9](?=[0-9])/g, '$& ');
    let moduleIndex = findModuleIndex(search); 
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