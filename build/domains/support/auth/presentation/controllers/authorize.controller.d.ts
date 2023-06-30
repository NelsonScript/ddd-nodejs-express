import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
declare class AuthorizeController extends BaseController {
    protected executeImpl(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void | any>;
}
export { AuthorizeController };
