import * as express from "express";
declare abstract class CommonRoutesConfig {
    api: express.Application;
    name: string;
    prefix: string;
    constructor(api: express.Application, name: string, prefix: string);
    getName(): string;
    abstract configureRoutes(): express.Application;
}
export { CommonRoutesConfig };
