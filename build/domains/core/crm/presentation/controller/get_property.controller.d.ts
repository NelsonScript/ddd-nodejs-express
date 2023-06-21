import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
declare class GetPropertyController extends BaseController {
    protected executeImpl(req: express.Request, res: express.Response): Promise<void | any>;
}
export default GetPropertyController;
