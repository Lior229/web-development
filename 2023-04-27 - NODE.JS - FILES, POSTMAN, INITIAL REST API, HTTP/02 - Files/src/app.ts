import {writeNumbers,readNumbers} from './files-handler';

const main = async () => {
    await writeNumbers();
    await readNumbers();
}

main();