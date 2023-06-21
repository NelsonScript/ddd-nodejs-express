"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("../../../../../shared/utils/base.controller");
/// import InMemoryCacheModel from "../../data/data_sources/local/in_memory_cache.model";
class LogoutController extends base_controller_1.BaseController {
    async executeImpl(req, res, next) {
        try {
            req.logout({}, (err) => { });
            return this.redirect(res, '/');
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.default = LogoutController;
