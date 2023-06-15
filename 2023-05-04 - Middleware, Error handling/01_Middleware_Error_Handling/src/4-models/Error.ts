import { extend } from "joi";

export class Error {
    public constructor(public message: string, public status: number) { }
}

export class RouteNotFoundError extends Error {
    public constructor(route: string) {
        super(`Route ${route} not exists`, 404);
    }
}

export class ResourceNotFoundError extends Error {
    public constructor(id: number) {
        super(`Id ${id} not exists`, 404);
    }
}

export class ValidationError extends Error {
    public constructor(message: string) {
        super(message, 400);
    }
}
