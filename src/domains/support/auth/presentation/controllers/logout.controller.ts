import * as express from "express";

import { BaseController } from "../../../../../shared/utils/base.controller";
/// import InMemoryCacheModel from "../../data/data_sources/local/in_memory_cache.model";

class LogoutController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void | any> {
    try {
      req.logout({}, (err: any) => {} );      
      return this.redirect(res,'/');

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default LogoutController;