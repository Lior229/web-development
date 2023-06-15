import fsPromises from 'fs/promises';

export const writeNumbers = async () => {
    await fsPromises.writeFile('./numbers.txt','');

    for(let i = 1; i <= 100; i++){
        const num = Math.floor(Math.random() * 100);
        await fsPromises.appendFile('./numbers.txt',`${num.toString()}\n`);
    }
}


export const readNumbers = async () => {
    const content = await fsPromises.readFile('./numbers.txt','utf-8');

    console.log(content);
}



