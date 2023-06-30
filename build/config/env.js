"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleConfig = exports.firebaseConfig = exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const logger_middlerware_1 = require("../shared/utils/middlewares/logger.middlerware");
const ENV_PRODUCTION = "production";
const ENV_DEVELOPMENT = "development";
// checking if .env file is available
if (fs_1.default.existsSync(".env")) {
    dotenv_1.default.config({ path: ".env" });
}
else {
    logger_middlerware_1.logger.error(".env file not found.");
}
const config = {
    hubspotAccessToken: process.env.HUBSPOT_ACCESS_TOKEN || "",
    mongoDbUrl: 'mongodb://localhost/oauth_server' || process.env.mongoDbUrl,
    salt: 'a5828e9d6052dc3b14a93e07a5932dd9' || process.env.salt,
    swaggerFile: process.env.NODE_ENV === ENV_DEVELOPMENT ? (`${process.cwd()}/src/config/swagger/swagger.json`) : (`${process.cwd()}/config/swagger/swagger.json`),
    hostName: process.env.NODE_ENV === ENV_PRODUCTION ? 'https://api.clinicavisualyauditiva.com' : `http://localhost:${parseInt(process.env.PORT, 10)}`,
    port: parseInt(process.env.PORT, 10)
};
exports.config = config;
console.log("🧩", config.swaggerFile, process.env.NODE_ENV);
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
    projectId: process.env.FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.FIREBASE_APP_ID || "",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "",
    clientId: process.env.FIREBASE_CLIENT_ID || ""
};
exports.firebaseConfig = firebaseConfig;
const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    callbackURL: `${config.hostName}/auth/google/callback`
};
exports.googleConfig = googleConfig;
