"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../../../../shared/utils/base.controller");
const contact_service_1 = __importDefault(require("../../application/service/contact.service"));
const contact_hubspot_v3_mapper_1 = require("../../../../../shared/providers/crm/hubspot/v3/data/mappers/contact_hubspot_v3.mapper");
//import { logger } from "../../../../../../shared/utils/middlewares/logger.middlerware";
class CreateContactCRMController extends base_controller_1.BaseController {
    async executeImpl(req, res) {
        try {
            const contactService = new contact_service_1.default();
            const contact = contact_hubspot_v3_mapper_1.ContactHubspotV3Mapper.toDTO(req.body);
            const result = await contactService.create(contact);
            //console.info("🚩🚩🏁🏁🏁🏁🏁🏁♧♧♧🏁🏁🏁🏁🏁🏁🏁🏁🏁🚩🚩");  
            console.log("res", result);
            return this.ok(res, result);
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.default = CreateContactCRMController;
