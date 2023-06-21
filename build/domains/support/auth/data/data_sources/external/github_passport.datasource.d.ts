import PassportGithub from "passport-github";
declare class GithubPassportDatasource extends PassportDatasource {
    private _strategy;
    constructor(callbackURL: string);
    get strategy(): PassportGithub.Strategy;
    serializeUser(callback: any): void;
    deserializeUser(callback: any): void;
    use(): void;
}
export default GithubPassportDatasource;
