import * as express from "express";
import { Get, Route } from "tsoa";
import { BaseController } from "../../../../../shared/utils/base.controller";
import ContactService from "../../application/service/contact.service";

class GetContactCRMByEmailController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      const contactService: ContactService = new ContactService();
      // const authRepository: AuthRepository = new AuthRepository(githubOAuthDS);
      // // The req.query object has the query params that;
      // // were sent to this route. We want the `code` param
      const {email} = req.params;
      const gcbe = await contactService.getContactByEmail(`${email}`);
      //res.redirect('/');
      return this.ok<any>(res, gcbe);

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default GetContactCRMByEmailController;