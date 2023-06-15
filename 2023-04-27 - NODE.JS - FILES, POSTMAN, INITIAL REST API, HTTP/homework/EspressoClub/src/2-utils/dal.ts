import Capsule from "../4-models/capsule";
import fsPromises from 'fs/promises';

const filePath = "./src/1-assets/json/capsules.json";

export const getAllCapsules =async (): Promise<Capsule[]> => {
    const content = await fsPromises.readFile(filePath,'utf-8');
    return JSON.parse(content);
}