import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
import DealService from "../../application/service/deal.service";

class GetDealCRMByIdController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      const dealService: DealService = new DealService();
      // const authRepository: AuthRepository = new AuthRepository(githubOAuthDS);
      // // The req.query object has the query params that;
      // // were sent to this route. We want the `code` param
      const { id } = req.params;
      const gcbe = await dealService.getBy(id);      
      return this.ok<any>(res, gcbe);

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default GetDealCRMByIdController;