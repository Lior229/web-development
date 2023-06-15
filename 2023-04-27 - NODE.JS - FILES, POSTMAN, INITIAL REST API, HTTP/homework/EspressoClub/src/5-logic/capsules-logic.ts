import Capsule from "../4-models/capsule";
import * as dal from "../2-utils/dal";

export const getAllCapsules =async (): Promise<Capsule[]> => {
    return await dal.getAllCapsules();
}

export const getCapsulesById =async (id:number): Promise<Capsule> => {
    const capsules = await dal.getAllCapsules();
    const capsule = capsules.find((c)=>{return c.id === id})
    return capsule as Capsule;
}

export const addCapsule =async (capsule:Capsule): Promise<Capsule> => {
    const capsules = await dal.getAllCapsules();
    const addedcapsule ;
    return addedcapsule as Capsule;
}