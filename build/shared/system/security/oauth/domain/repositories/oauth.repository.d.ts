interface IOAuth {
    generateAccessToken(code: string): Promise<any>;
}
export default IOAuth;
