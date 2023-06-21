import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
import PropertyService from "../../application/service/property.service";

class GetPropertyController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      const {hub, property} = req.params;
      const propertyService: PropertyService = new PropertyService();
      // const authRepository: AuthRepository = new AuthRepository(githubOAuthDS);
      // // The req.query object has the query params that;
      // // were sent to this route. We want the `code` param
      
      const propertyRecords = await propertyService.find(hub, property);
      return this.ok<any>(res, propertyRecords);

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default GetPropertyController;