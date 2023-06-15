export class Error {
    public constructor(public message: string, public status: number) { }
}

export class RouteNotFoundError extends Error {
    public constructor(route: string) {
        super(`Route ${route} not exists`, 404);
    }
}

export class ValidationError extends Error {
    public constructor(msg: string) {
        super(msg, 400);
    }
}

export class ResourceNotFound extends Error {
    public constructor(id: number) {
        super(`id ${id} not exists`, 404);
    }
}