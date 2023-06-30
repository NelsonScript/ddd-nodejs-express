import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
import ContactService from "../../application/service/contact.service";
import ContactHubspotV3Entity from "../../../../../shared/providers/crm/hubspot/v3/domain/entities/contact_hubspot_v3.entity";
import { ContactHubspotV3Mapper } from "../../../../../shared/providers/crm/hubspot/v3/data/mappers/contact_hubspot_v3.mapper";
//import { logger } from "../../../../../../shared/utils/middlewares/logger.middlerware";

class CreateContactCRMController extends BaseController {

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      //const contactService: ContactService = new ContactService();    
      console.log(req); 
      //const contact: ContactHubspotV3Entity = ContactHubspotV3Mapper.toDTO(req.body);
      
    //  const result = await contactService.create(contact);       
      
      return this.ok<any>(res, "result");

    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default CreateContactCRMController;