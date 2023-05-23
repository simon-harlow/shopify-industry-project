const fs = require('fs'); 

const readDetailedData = () =>{
    const notesJSON = fs.readFileSync("./data/Makemodules.json");
    const parsedNotes = JSON.parse(notesJSON);
    return parsedNotes;
}


const makeMod = (name, date) =>{
    const mod =
    {
        name, 
        date,
    }
    return mod;
}

const addMod = (name, date) =>{


    const createdMod = makeMod(name, date);
    const detailedData = readDetailedData();
  
    detailedData.push(createdMod);
    fs.writeFileSync('./data/Makemodules.json', JSON.stringify(detailedData, null, 2));
}

module.exports = {
    readDetailedData,
    addMod,
    resolve: {
        extensions: ['.js', '.jsx']
    }
};