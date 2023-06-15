import fsPromises from 'fs/promises';

const logger = async (msg: string): Promise<void> => {
    const now = new Date();
    let line = `${now.toLocaleDateString()} \t ${msg}\n`;
    line += "---------------------------------\n";
    await fsPromises.appendFile('./logger.txt', line);
}


export default logger;