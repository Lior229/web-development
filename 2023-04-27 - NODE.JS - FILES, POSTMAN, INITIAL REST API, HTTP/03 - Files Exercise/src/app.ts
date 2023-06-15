import {appendToFile,readFromFile,writeToFile} from './files-handler';

async function main(){
    await writeToFile();
    await appendToFile();
    await appendToFile();
    await appendToFile();
    await readFromFile();
}

main();