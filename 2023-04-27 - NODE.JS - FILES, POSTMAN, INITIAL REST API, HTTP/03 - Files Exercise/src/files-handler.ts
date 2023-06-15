import fspromises from 'fs/promises' // file system

async function writeToFile():Promise<void>{
    const text = 'Hello\nthis is my first file...\n';
    await fspromises.writeFile('./data.txt',text);
} 

async function appendToFile():Promise<void>{
    const text = 'we are appending to file...\n';
    await fspromises.appendFile('./data.txt',text);
} 

async function readFromFile():Promise<void>{

  const text =  await fspromises.readFile('./data.txt','utf-8');
  console.log(text);
} 

export {
    writeToFile,
    appendToFile,
    readFromFile
}