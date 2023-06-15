import fsPromises from 'fs/promises';
import eventEmitter from './Emitter';

const filePath = './logger.txt'

eventEmitter.on('logger-fs', async (msg: string) => {
    // working with the file system
    const now = new Date();
    let line = `${now.toLocaleDateString()} \t ${msg} \n`;
    line += "----------------------------------\n";

    await fsPromises.appendFile(filePath, line);
})

// eventEmitter.on('logger-db', async (msg: string) => {
//     //logic for working and sending errors to the db
// })

const logger = async (eventName: string, msg: string) => {
    eventEmitter.emit(eventName, msg);
}

export default logger;