"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTokenController = void 0;
const base_controller_1 = require("../../../../../shared/utils/base.controller");
class GenerateTokenController extends base_controller_1.BaseController {
    async executeImpl(req, res) {
        try {
            // const githubOAuthDS:GitHubOAuthDS = new GitHubOAuthDS();
            // const authRepository: AuthRepository = new AuthRepository(githubOAuthDS);
            // // The req.query object has the query params that;
            // // were sent to this route. We want the `code` param
            const code = req.query.code;
            // const token = await authRepository.generateToken(code);
            console.log(code);
            //res.redirect('/');
            return this.ok(res, "token");
        }
        catch (error) {
            this.fail(res, error.message);
        }
    }
}
exports.GenerateTokenController = GenerateTokenController;
