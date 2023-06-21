declare class InMemoryCacheModel {
    private clients;
    private tokens;
    private users;
    constructor(clientId: string, clientSecret: string);
    getAccessToken: (bearerToken: any) => Promise<false | {
        accessToken: any;
        accessTokenExpiresAt: any;
        clientId: any;
        refreshToken: any;
        refreshTokenExpiresAt: any;
        userId: any;
    }>;
    /**
     * Get refresh token.
     */
    getRefreshToken: (bearerToken: any) => Promise<false | {
        accessToken: any;
        accessTokenExpiresAt: any;
        clientId: any;
        refreshToken: any;
        refreshTokenExpiresAt: any;
        userId: any;
    }>;
    /**
     * Get client.
     */
    getClient: (clientId: string, clientSecret: string) => Promise<false | {
        clientId: string;
        clientSecret: string;
        redirectUris: string[];
    }>;
    /**
     * Save token.
     */
    saveToken: (token: {
        accessToken: any;
        accessTokenExpiresAt: any;
        refreshToken: any;
        refreshTokenExpiresAt: any;
    }, client: {
        clientId: any;
    }, user: {
        id: any;
    }) => Promise<void>;
    getUser: (username: string, password: string) => Promise<false | {
        username: string;
        password: string;
    }>;
}
export default InMemoryCacheModel;
