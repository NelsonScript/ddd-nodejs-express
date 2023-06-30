import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
declare class AssociateContactDealCRMController extends BaseController {
    protected executeImpl(req: express.Request, res: express.Response): Promise<any>;
}
export default AssociateContactDealCRMController;
