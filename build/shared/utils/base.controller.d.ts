import * as express from "express";
declare abstract class BaseController {
    /**
     * This is the implementation that we will leave to the
     * subclasses to figure out.
     */
    protected abstract executeImpl(req: express.Request, res: express.Response, next?: express.NextFunction): Promise<void | any>;
    /**
     * This is what we will call on the route handler.
     * We also make sure to catch any uncaught errors in the
     * implementation.
     */
    execute(req: express.Request, res: express.Response, next?: express.NextFunction): Promise<void>;
    static jsonResponse(res: express.Response, code: number, message: string): express.Response<any, Record<string, any>>;
    ok<T>(res: express.Response, dto?: T): express.Response<any, Record<string, any>>;
    created(res: express.Response): express.Response<any, Record<string, any>>;
    clientError(res: express.Response, message?: string): express.Response<any, Record<string, any>>;
    unauthorized(res: express.Response, message?: string): express.Response<any, Record<string, any>>;
    paymentRequired(res: express.Response, message?: string): express.Response<any, Record<string, any>>;
    forbidden(res: express.Response, message?: string): express.Response<any, Record<string, any>>;
    notFound(res: express.Response, message?: string): express.Response<any, Record<string, any>>;
    conflict(res: express.Response, message?: string): express.Response<any, Record<string, any>>;
    redirect(res: express.Response, uri: string): void;
    tooMany(res: express.Response, message?: string): express.Response<any, Record<string, any>>;
    todo(res: express.Response): express.Response<any, Record<string, any>>;
    fail(res: express.Response, error: Error | string): express.Response<any, Record<string, any>>;
}
export { BaseController };
