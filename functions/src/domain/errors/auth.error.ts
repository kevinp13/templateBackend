export class AuthError extends Error {
    status = 403;
    name = 'AuthError';
    constructor() {
        super('You do not have access');
    }

    toJson() {
        return {
            name: this.name,
            status: this.status,
            message: this.message,
        };
    }
}
