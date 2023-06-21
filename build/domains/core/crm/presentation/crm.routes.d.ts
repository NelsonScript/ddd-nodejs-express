import express from 'express';
import { CommonRoutesConfig } from '../../../../shared/utils/common_routes.config';
declare class CRMRoutes extends CommonRoutesConfig {
    constructor(api: express.Application);
    configureRoutes(): express.Application;
}
export default CRMRoutes;
