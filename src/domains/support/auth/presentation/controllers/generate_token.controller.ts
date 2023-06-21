import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";

import { AuthRepository } from "../../data/repositories/auth.repository";
import GitHubOAuthDS from "../../data/data_sources/external/github_oauth.datasource";

class GenerateTokenController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      // const githubOAuthDS:GitHubOAuthDS = new GitHubOAuthDS();
      // const authRepository: AuthRepository = new AuthRepository(githubOAuthDS);
      // // The req.query object has the query params that;
      // // were sent to this route. We want the `code` param
      const code = req.query.code;
      // const token = await authRepository.generateToken(code);
      console.log(code);
      //res.redirect('/');
      return this.ok<any>(res, "token");

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export { GenerateTokenController };