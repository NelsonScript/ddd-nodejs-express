import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
import DealService from "../../application/service/deal.service";
//import { logger } from "shared/utils/middlewares/logger.middlerware";

class CreateDealCRMController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      const dealService: DealService = new DealService();
      const deal = req.body;
      const result = await dealService.create(deal);

      // console.info("🚩🚩🏁🏁🏁🏁🏁🏁♧♧♧🏁🏁🏁🏁🏁🏁🏁🏁🏁🚩🚩");
      // console.log(result);
      
      return this.ok<any>(res, result);

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default CreateDealCRMController;