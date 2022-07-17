
export class NotFoundError extends Error {
    status = 404;
    name = 'NotFoundError';
    constructor(message: string) {
        super(message);
    }
    toJson() {
        return {
            name: this.name,
            status: this.status,
            message: this.message,
        };
    }
}
