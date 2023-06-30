"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
class AuthRepository {
    oauth;
    constructor(oauthProvider) {
        this.oauth = oauthProvider;
    }
    async generateToken(code) {
        console.info("🔔 AuthRepository.generateToken::Code", code);
        return this.oauth.generateAccessToken(code);
    }
}
exports.AuthRepository = AuthRepository;
