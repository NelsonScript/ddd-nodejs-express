"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../../../../shared/utils/base.controller");
const deal_service_1 = __importDefault(require("../../application/service/deal.service"));
class AssociateContactDealCRMController extends base_controller_1.BaseController {
    async executeImpl(req, res) {
        try {
            const contact = req.body.contact;
            const dealService = new deal_service_1.default();
            const deal = req.body.deal;
            const turnSaved = await dealService.associateWithContact(deal, contact);
            return this.ok(res, turnSaved);
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.default = AssociateContactDealCRMController;
