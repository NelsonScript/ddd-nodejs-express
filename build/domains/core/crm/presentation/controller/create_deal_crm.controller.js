"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../../../../shared/utils/base.controller");
const deal_service_1 = __importDefault(require("../../application/service/deal.service"));
//import { logger } from "shared/utils/middlewares/logger.middlerware";
class CreateDealCRMController extends base_controller_1.BaseController {
    async executeImpl(req, res) {
        try {
            const dealService = new deal_service_1.default();
            const deal = req.body;
            const result = await dealService.create(deal);
            console.info("🚩🚩🏁🏁🏁🏁🏁🏁♧♧♧🏁🏁🏁🏁🏁🏁🏁🏁🏁🚩🚩");
            console.log(result);
            return this.ok(res, result);
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.default = CreateDealCRMController;
