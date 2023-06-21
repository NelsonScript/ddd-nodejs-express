"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../../../../shared/utils/base.controller");
const contact_service_1 = __importDefault(require("../../application/service/contact.service"));
class GetContactsController extends base_controller_1.BaseController {
    async executeImpl(req, res) {
        try {
            const contactService = new contact_service_1.default();
            // const authRepository: AuthRepository = new AuthRepository(githubOAuthDS);
            // // The req.query object has the query params that;
            // // were sent to this route. We want the `code` param
            const gcbe = await contactService.getContacts();
            //res.redirect('/');
            return this.ok(res, gcbe);
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.default = GetContactsController;
