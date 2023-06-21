import * as express from "express";

import { BaseController } from "../../../../../shared/utils/base.controller";
/// import InMemoryCacheModel from "../../data/data_sources/local/in_memory_cache.model";

class AuthorizeController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void | any> {
    try {
      // authorize(req, res, [options], [callback])
      // const oauth = OAuth2Server({ model: new InMemoryCacheModel(`${process.env.GITHUB_CLIENT_ID}`, `${process.env.GITHUB_CLIENT_SERVER}`) });
      //   return oauth.authorize(req, res, options)
      //     .then(function (code) {
      //       res.locals.oauth = { code: code };
      //       next();
      //     })
      //     .catch(function (err) {
      //       // handle error condition
      //     });


      return this.ok<any>(res, "resAxios");

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export { AuthorizeController };

