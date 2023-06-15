class Credentials {
    public username: string;
    public password: string;

    public constructor(credentials: Credentials) {
        this.username = credentials.username;
        this.password = credentials.password;
    }
}

export default Credentials;