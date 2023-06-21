
import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";

import DealService from "../../application/service/deal.service";

class AssociateContactDealCRMController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<any> {
    
    try {

      const contact: any = req.body.contact;     
      const dealService: DealService = new DealService();
      const deal: any = req.body.deal;      

      const associateSaved = await dealService.associateWithContact(deal, contact);
      console.table(associateSaved);
      return this.ok<any>(res, associateSaved);
    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default AssociateContactDealCRMController;