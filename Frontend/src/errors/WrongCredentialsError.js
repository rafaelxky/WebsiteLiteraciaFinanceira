export class WrongCredentialsError extends Error {
    constructor(message) {
        super(message);
        this.name = "Error: wrong credentials!";
    }
}