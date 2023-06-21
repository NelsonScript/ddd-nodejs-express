"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const debug_1 = __importDefault(require("debug"));
//Firebase
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
//Passport
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const auth_routes_1 = require("../domains/support/auth/presentation/auth.routes");
const crm_routes_1 = __importDefault(require("../domains/core/crm/presentation/crm.routes"));
//Winston Logger
const error_logger_middleware_1 = require("../shared/utils/middlewares/error_logger.middleware");
const logger_middlerware_1 = require("../shared/utils/middlewares/logger.middlerware");
// import Routes from "./routes/routes";
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const fs = require("fs");
const env_1 = require("./env");
class App {
    express;
    debugLog = (0, debug_1.default)("this.express");
    _firebaseApp = (0, app_1.initializeApp)(env_1.firebaseConfig);
    _auth = (0, auth_1.getAuth)(this._firebaseApp);
    _routes = [];
    //public logger: Logger;
    // array to hold users
    users;
    /* Swagger files start */
    swaggerData = fs.readFileSync('swagger.json', 'utf8');
    // //private customCss: any = fs.readFileSync((process.cwd() + "/swagger/swagger.css"), 'utf8');
    swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */
    constructor() {
        this.express = (0, express_1.default)();
        this.configExpressMiddleware();
        this.configCookies();
        this.configPassword();
        this.configCORS();
        this.configRoutes();
        this.users = [];
        if (!env_1.config.port) {
            console.log(`Error to get enviroment config ports`);
            process.exit(1);
        }
        this._auth.languageCode = 'es';
    }
    configCookies() {
        this.express.use((0, express_session_1.default)({
            secret: "🍪 session of clinica visual y auditiva this.express",
            cookie: {
                maxAge: 60000 * 60 * 24, // 1 day
                //secure: true
            },
            saveUninitialized: false,
            resave: false,
            //name: "secret-cva"
        }));
    }
    configCORS() {
        this.express.use((0, cors_1.default)({ origin: true }));
    }
    // Configure Express middleware.
    configExpressMiddleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        // Using req.body with POST Parameters to support
        // JSON-encoded and URL-encoded bodies.
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
    }
    configLogger() {
        // here we are configuring the expressWinston logging middleware,
        // which will automatically log all HTTP requests handled by Express.js
        this.express.use(logger_middlerware_1.winstonLogger);
        //------------------- ERROR MANAGER LAYER -------------------
        // adding the error handlers
        this.express.use(error_logger_middleware_1.errorLogger);
    }
    configPassword() {
        this.express.use(passport_1.default.initialize());
        this.express.use(passport_1.default.session());
        //   new passportGithub.Strategy(
        const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
        passport_1.default.use(new GoogleStrategy(env_1.googleConfig, async (_accessToken, _refreshToken, _profile, cb) => {
            try {
                //   // Sign in to Firebase with the Google access token
                const credential = auth_1.GoogleAuthProvider.credential(null, _accessToken);
                const userCredential = await (0, auth_1.signInWithCredential)(this._auth, credential);
                console.log("🚨", env_1.config.hostName);
                // Return the user
                return cb(null, userCredential.user);
            }
            catch (error) {
                const errors = [{ code: "auth/user-disabled", message: "El usuario ya existía en el sistema pero ha sido deshabilitado, comuníquese con el administrador!" }];
                //console.warn(error.code);
                const customError = errors.find((customError) => customError.code == error.code);
                return cb(customError?.message);
            }
            // logger.info("🍮 🍭 🍬 🍫 🍩 🍪"); 
            // console.log(_accessToken);
            // console.log(profile);
            // console.info("_________________________________________")
            // return cb(null, profile);
        }));
        passport_1.default.serializeUser((user, cb) => {
            cb(null, user);
        });
        passport_1.default.deserializeUser(async (obj, cb) => {
            //const user = await auth.currentUser;
            //const user:UserEntity = Object.assign({}, new UserEntity(id, "", ""));
            cb(null, obj);
        });
    }
    configRoutes() {
        // here we are adding the UserRoutes to our array,
        // after sending the Express.js apilication object to have the routes added to our api!
        this._routes = [new crm_routes_1.default(this.express), new auth_routes_1.AuthRoutes(this.express)];
        // swagger docs
        this.express.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(this.swaggerDocument));
        // swagger docs
        // this.express.use('/this.express/docs', swaggerUi.serve,
        //   swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));
        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!");
        });
    }
}
exports.default = new App().express;
