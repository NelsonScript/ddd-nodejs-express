declare abstract class PassportDatasource implements PassportRepository {
    constructor(callBackURI: string);
    serializeUser(callback: any): void;
    deserializeUser(callback: any): void;
    use(strategy: any): void;
}
