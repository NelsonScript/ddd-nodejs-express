import IOAuth from "../../../../../shared/system/security/oauth/domain/repositories/oauth.repository";
declare class AuthRepository {
    private oauth;
    constructor(oauthProvider: IOAuth);
    generateToken(code: any): Promise<string>;
}
export { AuthRepository };
