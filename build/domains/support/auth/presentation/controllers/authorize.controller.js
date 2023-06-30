"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizeController = void 0;
const base_controller_1 = require("../../../../../shared/utils/base.controller");
/// import InMemoryCacheModel from "../../data/data_sources/local/in_memory_cache.model";
class AuthorizeController extends base_controller_1.BaseController {
    async executeImpl(req, res, next) {
        try {
            // authorize(req, res, [options], [callback])
            // const oauth = OAuth2Server({ model: new InMemoryCacheModel(`${process.env.GITHUB_CLIENT_ID}`, `${process.env.GITHUB_CLIENT_SERVER}`) });
            //   return oauth.authorize(req, res, options)
            //     .then(function (code) {
            //       res.locals.oauth = { code: code };
            //       next();
            //     })
            //     .catch(function (err) {
            //       // handle error condition
            //     });
            return this.ok(res, "resAxios");
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.AuthorizeController = AuthorizeController;
