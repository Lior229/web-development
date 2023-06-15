import { Request, Response, NextFunction } from 'express';

const logRequest = (req: Request, res: Response, next: NextFunction) => {

    console.log(`Request Method: ${req.method}, Request Route:${req.originalUrl}`)

    // transfer flow to next middleware or to the controller
    next();
}

export default logRequest;