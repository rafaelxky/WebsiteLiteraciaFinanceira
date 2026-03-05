export class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = "Error: server failed to respond!";
    }
}