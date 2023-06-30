import * as express from "express";
import { CommonRoutesConfig } from "../../../../shared/utils/common_routes.config";
declare class AuthRoutes extends CommonRoutesConfig {
    constructor(api: express.Application);
    configureRoutes(): express.Application;
}
export { AuthRoutes };
