import { NextFunction, Request, Response } from 'express';
import logger from '../2-utils/logger';
import { Error } from '../4-models/Error';

const catchAll = async (err: Error, request: Request, response: Response, next: NextFunction) => {

    // Log the error to the console
    console.log(err);

    //Log the error to an error log file
    logger(err.message);

    // Send back the error to the client
    response.status(err.status || 500).send(err.message);

}

export default catchAll;