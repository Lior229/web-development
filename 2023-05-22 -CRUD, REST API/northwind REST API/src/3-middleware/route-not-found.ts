import { Request, Response, NextFunction } from 'express';
import { RouteNotFoundError } from '../4-models/Error';

const routeNotFound = async (request: Request, response: Response, next: NextFunction) => {


    const err = new RouteNotFoundError(request.originalUrl);

    next(err);

}

export default routeNotFound;