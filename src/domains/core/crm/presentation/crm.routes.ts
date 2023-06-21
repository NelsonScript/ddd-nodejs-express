import express from 'express';
//import {RouterConfig} from '../../../../../../shared/utils/router.config';
import { CommonRoutesConfig } from '../../../../shared/utils/common_routes.config';
import AssociateContactDealCRMController from './controller/associate_contact_deal_crm.controller';
import CreateContactCRMController from "./controller/create_contact_crm.controller";
import CreateDealCRMController from './controller/create_deal_crm.controller';
import GetDealCRMByIdController from './controller/get_deal_crm_by_id.controller';
import GetContactCRMByEmailController from "./controller/get_contact_crm_by_email.controller";
import GetPropertyController from "./controller/get_property.controller";
import isAuthenticated from "../../../../shared/utils/middlewares/is_authenticated.middleware";
// {
//   "firstname": "Max",
//     "lastname": "Lencina",
//       "dni": "39106491",
//         "cuit": "20391064912",
//           "documentType": "CC",
//             "identificationNumber": "1000132432423",
//               "email": "mlencina@debmedia.com",
//                 "mobilePhone": "1130971795",
//                   "tiposDeServicio": "PRO",
//                     "turno": "9";

// }
class CRMRoutes extends CommonRoutesConfig{
  
  constructor(api: express.Application) {
    super(api, "CRMRoutes", "crm");
  }

  configureRoutes() {    
    //CONTACT HUB
    this.api.route('/v2/crm/contact/:email')     
      .get(isAuthenticated, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        new GetContactCRMByEmailController().execute(req, res);
      });
    this.api.route('/v2/crm/contact')
      .post((req: express.Request, res: express.Response, next: express.NextFunction) => {
        new CreateContactCRMController().execute(req, res);     
      });

    //DEAL HUB    
    this.api.route('/v2/crm/deal/:id')
      .get((req: express.Request, res: express.Response, next: express.NextFunction) => {
        new GetDealCRMByIdController().execute(req, res);
      });

    this.api.route('/v2/crm/deal')
      .post(isAuthenticated, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        new CreateDealCRMController().execute(req, res);
      });

    this.api.route('/v2/crm/appointment/whatsapp')
      .post(isAuthenticated, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        new AssociateContactDealCRMController().execute(req, res);
      });

    this.api.route('/v2/crm/ole/turn')
      .post(isAuthenticated, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.info("URL");
        new AssociateContactDealCRMController().execute(req, res);
      });

    this.api.route('/v2/crm/ole/whatsapp')
      .post(isAuthenticated, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        new AssociateContactDealCRMController().execute(req, res);
      }); 

    this.api.route('/v2/crm/optica/turn')
      .post(isAuthenticated, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        new AssociateContactDealCRMController().execute(req, res);
      });

    //PROPERTY HUB  
    this.api.route('/v2/crm/hub/:hub/property/:property')      
      .get(isAuthenticated, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        new GetPropertyController().execute(req, res);
      }); 

    return this.api;
  }

}

export default CRMRoutes;
