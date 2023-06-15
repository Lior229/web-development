import Joi from "joi";
import Role from "./Role";


class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public username: String;
    public password: string;
    public role: Role

    public constructor(user: User) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
    }

    private static validationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        firstName: Joi.string().required().min(2).max(20),
        lastName: Joi.string().required().min(2).max(20),
        username: Joi.string().required().min(2).max(20),
        password: Joi.string().required().min(2).max(20),
        // role: Joi.forbidden()
    });


    public validate(): string | undefined {
        const result = User.validationSchema.validate(this);
        return result.error?.message;
    }


}

export default User;