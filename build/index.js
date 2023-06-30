"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./config/env");
//import api from "./config/api.config";
const app_1 = __importDefault(require("./config/app"));
app_1.default.listen(env_1.config.port, () => {
    console.log(`ℹ️ Servers from TS running at ${env_1.config.hostName} (🔅_🔅)`);
    // routes.forEach((route: CommonRoutesConfig) => {
    //   debugLog(`Routes configured for ${route.getName()}`);
    // });
});
