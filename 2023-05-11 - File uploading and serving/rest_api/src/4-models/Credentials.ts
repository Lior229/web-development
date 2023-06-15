import Joi from "joi";

class Credentials {
    public username: string;
    public password: string;

    public constructor(credentials: Credentials) {
        this.username = credentials.username;
        this.password = credentials.password;
    }

    private static validateSchema = Joi.object({
        username: Joi.string().required().min(2).max(20),
        password: Joi.string().required().min(2).max(20),
    });

    public validate() : string | undefined {
        const result = Credentials.validateSchema.validate(this);
        return result.error?.message;
    }
}

export default Credentials;