import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
declare class CreateDealCRMController extends BaseController {
    protected executeImpl(req: express.Request, res: express.Response): Promise<void | any>;
}
export default CreateDealCRMController;
