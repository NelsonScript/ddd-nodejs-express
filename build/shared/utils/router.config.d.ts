import express from 'express';
declare class RouterConfig {
    private app;
    constructor(app: express.Application);
    getRouter(): express.Application;
}
export { RouterConfig };
