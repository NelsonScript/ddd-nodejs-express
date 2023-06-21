"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const base_controller_1 = require("../../../../../shared/utils/base.controller");
class IndexController extends base_controller_1.BaseController {
    async executeImpl(req, res) {
        try {
            //res.redirect('/');
            return this.ok(res, "token ...");
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.IndexController = IndexController;
