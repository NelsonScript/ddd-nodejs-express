"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {RouterConfig} from '../../../../../../shared/utils/router.config';
const common_routes_config_1 = require("../../../../shared/utils/common_routes.config");
const associate_contact_deal_crm_controller_1 = __importDefault(require("./controller/associate_contact_deal_crm.controller"));
const create_contact_crm_controller_1 = __importDefault(require("./controller/create_contact_crm.controller"));
const create_deal_crm_controller_1 = __importDefault(require("./controller/create_deal_crm.controller"));
const get_contact_crm_by_email_controller_1 = __importDefault(require("./controller/get_contact_crm_by_email.controller"));
const get_property_controller_1 = __importDefault(require("./controller/get_property.controller"));
const is_authenticated_middleware_1 = __importDefault(require("../../../../shared/utils/middlewares/is_authenticated.middleware"));
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
class CRMRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(api) {
        super(api, "CRMRoutes", "crm");
    }
    configureRoutes() {
        //CONTACT HUB
        this.api.route('/v2/crm/contact/:email')
            .get(is_authenticated_middleware_1.default, (req, res, next) => {
            new get_contact_crm_by_email_controller_1.default().execute(req, res);
        });
        this.api.route('/v2/crm/contact')
            .post(is_authenticated_middleware_1.default, (req, res, next) => {
            new create_contact_crm_controller_1.default().execute(req, res);
        });
        //DEAL HUB
        this.api.route('/v2/crm/deal')
            .post(is_authenticated_middleware_1.default, (req, res, next) => {
            new create_deal_crm_controller_1.default().execute(req, res);
        });
        this.api.route('/v2/crm/turn')
            .post(is_authenticated_middleware_1.default, (req, res, next) => {
            new associate_contact_deal_crm_controller_1.default().execute(req, res);
        });
        //PROPERTY HUB  
        this.api.route('/v2/crm/hub/:hub/property/:property')
            .get(is_authenticated_middleware_1.default, (req, res, next) => {
            new get_property_controller_1.default().execute(req, res);
        });
        return this.api;
    }
}
exports.default = CRMRoutes;
