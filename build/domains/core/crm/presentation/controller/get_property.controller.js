"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../../../../shared/utils/base.controller");
const property_service_1 = __importDefault(require("../../application/service/property.service"));
class GetPropertyController extends base_controller_1.BaseController {
    async executeImpl(req, res) {
        try {
            const { hub, property } = req.params;
            const propertyService = new property_service_1.default();
            // const authRepository: AuthRepository = new AuthRepository(githubOAuthDS);
            // // The req.query object has the query params that;
            // // were sent to this route. We want the `code` param
            const propertyRecords = await propertyService.find(hub, property);
            return this.ok(res, propertyRecords);
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.default = GetPropertyController;
