import { NextFunction, Request, Response } from 'express';
import logger from '../2-utils/logger';


const sabbathForbidden = async (req: Request, res: Response, next: NextFunction) => {


    const now = new Date();
    const day = now.getDay() + 1;

    if (day === 7) {
        res.send('Cant get service on Sabbath');
        await logger('logger-fs', 'request on Sabbath was made');
        return;
    }

    // Transfer the flow chain to the next middleware or the controller (router)
    next();
}


export default sabbathForbidden;

