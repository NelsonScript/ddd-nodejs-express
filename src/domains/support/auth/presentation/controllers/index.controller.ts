import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";

class IndexController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      //res.redirect('/');
      return this.ok<any>(res, "token ...");

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export { IndexController };
