const fs = require("fs").promises;
 
async function writeToFile() {
    await fs.writeFile(__dirname + "/text.txt", "Test Data");
    console.log('completed write file async')
}

async function readFile() {
    const fileContext = await fs.readFile("./text.txt", "utf-8")
    console.log(fileContext)
}

async function deleteFile() {
    await fs.unlink('./text.txt');
}
async function isFileExists() {
    fs.e('./text.txt', (exists) => console.log(exists
                 ? "fileExists" 
                 : "file Doest not exists"))
}
isFileExists();