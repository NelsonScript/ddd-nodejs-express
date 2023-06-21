"use strict";
class PassportDatasource {
    constructor(callBackURI) {
    }
    serializeUser(callback) {
        throw new Error("Method serializeUser not implemented.");
    }
    deserializeUser(callback) {
        throw new Error("Method deserializeUser not implemented.");
    }
    use(strategy) {
        throw new Error("Method use not implemented.");
    }
}
