import { generateToken } from "../2-utils/jwtAuth";
import * as dal from '../2-utils/dal';
import User from "../4-models/User";
import Role from "../4-models/Role";
import Credentials from "../4-models/Credentials";
import { UnauthorizedError, ValidationError } from "../4-models/Error";


export const register = async (user: User): Promise<string> => {

    // validation

    const error = user.validate();

    if (error) throw new ValidationError(error);

    // get all users (only now, when working with a real DB, we wont get all user);
    const users = await dal.getAllUsers();

    // if the username is taken

    if(users.some(u => u.username === user.username)){
        throw new ValidationError('username is already taken')
    }

    user.id = users[users.length - 1].id + 1;

    //define new user as a User role

    user.role = Role.User;

    // add the user to our db
    users.push(user);

    // save users back to file
    await dal.saveAllUsers(users);

    //generate token

    return generateToken(user);

}

export const login = async (credentials: Credentials): Promise<string> => {

    // validation


    // get all users (only now, when working with a real DB, we wont get all user);
    const users = await dal.getAllUsers();

    //get user by credentials

    const user = users.find((u) => (u.username === credentials.username) && (u.password === credentials.password));

    //if user not exists
    if (!user) throw new UnauthorizedError('Incorrect username or password');

    //generate token
    return generateToken(user);



}
