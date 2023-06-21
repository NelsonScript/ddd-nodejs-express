"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryCacheModel {
    clients;
    tokens;
    users;
    constructor(clientId, clientSecret) {
        this.clients = [{ clientId: clientId, clientSecret: clientSecret, redirectUris: [''] }];
        this.tokens = [];
        this.users = [{ username: '', password: '' }];
    }
    /*
    * Get access token.
    */
    getAccessToken = async (bearerToken) => {
        const tokens = this.tokens.filter(function (token) {
            return token.accessToken === bearerToken;
        });
        return tokens.length ? tokens[0] : false;
    };
    /**
     * Get refresh token.
     */
    getRefreshToken = async (bearerToken) => {
        const tokens = this.tokens.filter((token) => {
            return token.refreshToken === bearerToken;
        });
        return tokens.length ? tokens[0] : false;
    };
    /**
     * Get client.
     */
    getClient = async (clientId, clientSecret) => {
        const clients = this.clients.filter((client) => {
            return client.clientId === clientId && client.clientSecret === clientSecret;
        });
        return clients.length ? clients[0] : false;
    };
    /**
     * Save token.
     */
    saveToken = async (token, client, user) => {
        this.tokens.push({
            accessToken: token.accessToken,
            accessTokenExpiresAt: token.accessTokenExpiresAt,
            clientId: client.clientId,
            refreshToken: token.refreshToken,
            refreshTokenExpiresAt: token.refreshTokenExpiresAt,
            userId: user.id
        });
    };
    /*
    * Get user.
    */
    getUser = async (username, password) => {
        const users = this.users.filter((user) => {
            return user.username === username && user.password === password;
        });
        return users.length ? users[0] : false;
    };
}
exports.default = InMemoryCacheModel;
