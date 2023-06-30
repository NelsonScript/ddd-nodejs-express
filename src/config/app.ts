import * as bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import session from "express-session";
import debug from "debug";

//Firebase
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential
} from "firebase/auth";

//Passport
import passport from "passport";
import passportGoogle from "passport-google-oauth20";
// import passportGithub from "passport-github";

//Routes
import { CommonRoutesConfig } from "../shared/utils/common_routes.config";
import { AuthRoutes } from "../domains/support/auth/presentation/auth.routes";
import CRMRoutes from "../domains/core/crm/presentation/crm.routes";

//Winston Logger
import { errorLogger } from "../shared/utils/middlewares/error_logger.middleware";
import { winstonLogger } from "../shared/utils/middlewares/logger.middlerware";

// import Routes from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import fs = require('fs');
import { config, firebaseConfig, googleConfig } from "./env";

class App {

  public express: express.Application;
  public debugLog: debug.IDebugger = debug("this.express");
  private _firebaseApp = initializeApp(firebaseConfig);
  private _auth = getAuth(this._firebaseApp);
  private _routes: Array<CommonRoutesConfig> = [];
  //public logger: Logger;

  // array to hold users
  public users: any[];

 
  /* Swagger files start */  
  private swaggerData: any = fs.readFileSync('swagger.json', 'utf8');
  // //private customCss: any = fs.readFileSync((process.cwd() + "/swagger/swagger.css"), 'utf8');
  private swaggerDocument = JSON.parse(this.swaggerData);
  /* Swagger files end */

  constructor() {    
    this.express = express();    
    this.configExpressMiddleware();
    this.configCookies();
    this.configPassword();
    this.configCORS();
    this.configRoutes();
    this.users = [];  

    if (!config.port) {
      console.log(`Error to get enviroment config ports`);
      process.exit(1);
    }

    this._auth.languageCode = 'es';
  }

  private configCookies(): void {
    this.express.use(
      session({
        secret: "🍪 session of clinica visual y auditiva this.express",
        cookie: {
          maxAge: 60000 * 60 * 24, // 1 day
          //secure: true
        },
        saveUninitialized: false,
        resave: false,
        //name: "secret-cva"
      })
    );
  }

  private configCORS():void{
    this.express.use(cors({ origin: true }));
  }

  // Configure Express middleware.
  private configExpressMiddleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    // Using req.body with POST Parameters to support
    // JSON-encoded and URL-encoded bodies.
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  private configLogger(){
    // here we are configuring the expressWinston logging middleware,
    // which will automatically log all HTTP requests handled by Express.js
    this.express.use(winstonLogger);
    //------------------- ERROR MANAGER LAYER -------------------

    // adding the error handlers
    this.express.use(errorLogger);
  }

  private configPassword(): void {
    this.express.use(passport.initialize());
    this.express.use(passport.session());
    //   new passportGithub.Strategy(
    const GoogleStrategy = passportGoogle.Strategy;
    passport.use(new GoogleStrategy(googleConfig,
      async (_accessToken: string, _refreshToken: string, _profile: passportGoogle.Profile, cb: Function) => {
        try {
          //   // Sign in to Firebase with the Google access token
          const credential = GoogleAuthProvider.credential(null, _accessToken);
          const userCredential = await signInWithCredential(this._auth, credential);          
          // Return the user
          return cb(null, userCredential.user);

        } catch (error: any) {
          const errors = [{ code: "auth/user-disabled", message: "El usuario ya existía en el sistema pero ha sido deshabilitado, comuníquese con el administrador!" }];
          //console.warn(error.code);
          const customError = errors.find((customError) => customError.code == error.code);
          return cb(customError?.message);
        }       
      }
    ));


    passport.serializeUser((user, cb) => {
      cb(null, user);
    });

    passport.deserializeUser(async (obj: any, cb) => {
      //const user = await auth.currentUser;
      //const user:UserEntity = Object.assign({}, new UserEntity(id, "", ""));
      cb(null, obj);
    });

  }

  private configRoutes(): void {

    // here we are adding the UserRoutes to our array,
    // after sending the Express.js apilication object to have the routes added to our api! 
    this._routes = [new CRMRoutes(this.express), new AuthRoutes(this.express)];    
    // swagger docs
    this.express.use('/api/docs', swaggerUi.serve,swaggerUi.setup(this.swaggerDocument));

    // handle undefined routes
    // this.express.use("*", (req, res, next) => {
    //   res.send("Make sure url is correct!");
    // });
  }
}

export default new App().express;