class InMemoryCacheModel {

  private clients;
  private tokens: { accessToken: any; accessTokenExpiresAt: any; clientId: any; refreshToken: any; refreshTokenExpiresAt: any; userId: any; }[];
  private users;

  constructor(clientId: string, clientSecret:string) {

    this.clients = [{ clientId: clientId, clientSecret: clientSecret, redirectUris: [''] }];
    this.tokens = [];
    this.users = [{username: '', password: ''}];
  }

  /*
  * Get access token.
  */
  getAccessToken = async (bearerToken: any) => {
    const tokens = this.tokens.filter(function (token) {
      return token.accessToken === bearerToken;
    });

    return tokens.length ? tokens[0] : false;
  };

  /**
   * Get refresh token.
   */
  getRefreshToken = async (bearerToken: any) => {
    const tokens = this.tokens.filter((token) => {
      return token.refreshToken === bearerToken;
    });

    return tokens.length ? tokens[0] : false;
  };

  /**
   * Get client.
   */
  getClient = async (clientId: string, clientSecret: string) => {
    const clients = this.clients.filter((client) => {
      return client.clientId === clientId && client.clientSecret === clientSecret;
    });

    return clients.length ? clients[0] : false;
  };

  /**
   * Save token.
   */
  saveToken = async (token: { accessToken: any; accessTokenExpiresAt: any; refreshToken: any; refreshTokenExpiresAt: any; }, client: { clientId: any; }, user: { id: any; }) => {
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
  getUser = async (username: string, password: string) => {
    const users = this.users.filter((user) => {
      return user.username === username && user.password === password;
    });

    return users.length ? users[0] : false;
  };
}

export default InMemoryCacheModel;