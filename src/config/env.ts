
import dotenv from "dotenv";
import fs from "fs";
import { logger } from "../shared/utils/middlewares/logger.middlerware";


const ENV_PRODUCTION = "production";
const ENV_DEVELOPMENT = "development";

// checking if .env file is available
if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
} else {
  logger.error(".env file not found.");
}

const config = {
  hubspotAccessToken: process.env.HUBSPOT_ACCESS_TOKEN || "",
  mongoDbUrl: 'mongodb://localhost/oauth_server' || process.env.mongoDbUrl,
  salt: 'a5828e9d6052dc3b14a93e07a5932dd9' || process.env.salt,
  swaggerFile: process.env.NODE_ENV === ENV_DEVELOPMENT ? (`${process.cwd()}/src/config/swagger/swagger.json`) : (`${process.cwd()}/config/swagger/swagger.json`),
  hostName: process.env.NODE_ENV === ENV_PRODUCTION ? 'https://api.clinicavisualyauditiva.com' : `http://localhost:${parseInt(process.env.PORT as string, 10)}`,
  port: parseInt(process.env.PORT as string, 10)
};



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

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID || "", 
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", 
  callbackURL: `${config.hostName}/auth/google/callback`  
};

//const githubConfig = {
//   clientID: `${process.env.GITHUB_CLIENT_ID}`,
//   clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
//   callbackURL: `${config.hostName}/auth/github/callback`,
//   //scope:["",""],
//   passReqToCallback: true
// },

export {config, firebaseConfig, googleConfig};
