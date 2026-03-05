export class EmailConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = "Error: This email is already in use!";
    }
}