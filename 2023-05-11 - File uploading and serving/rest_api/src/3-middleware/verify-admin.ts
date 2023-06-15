import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../4-models/Error';
import Role from '../4-models/Role';



const verifyAdmin = async (request: Request, response: Response, next: NextFunction) => {

    const user = request?.user;


    const unauthorizedError = new UnauthorizedError('you are not authorized');

    if (!user) {
        next(unauthorizedError);
        return;
    }


    const isAdmin = user?.role === Role.Admin;

    if (!isAdmin) {
        next(unauthorizedError);
    }

    next();

}


export default verifyAdmin;