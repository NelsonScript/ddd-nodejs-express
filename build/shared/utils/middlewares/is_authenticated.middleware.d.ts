import * as express from "express";
declare const isAuthenticated: (req: any, res: express.Response, next: express.NextFunction) => Promise<void>;
export default isAuthenticated;
