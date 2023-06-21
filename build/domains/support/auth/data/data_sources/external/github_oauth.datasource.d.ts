import IOAuth from "../../../../../../shared/system/security/oauth/domain/repositories/oauth.repository";
declare class GitHubOAuthDS implements IOAuth {
    generateAccessToken(code: string): Promise<any>;
}
export default GitHubOAuthDS;
