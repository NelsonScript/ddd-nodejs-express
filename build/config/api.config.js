"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Express
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//Firebase
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
//Passport
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
// import passportGithub from "passport-github";
//Winston Logger
const error_logger_middleware_1 = require("../shared/utils/middlewares/error_logger.middleware");
const logger_middlerware_1 = require("../shared/utils/middlewares/logger.middlerware");
const auth_routes_1 = require("../domains/support/auth/presentation/auth.routes");
const crm_routes_1 = __importDefault(require("../domains/core/crm/presentation/crm.routes"));
//import UserEntity from "../../shared/providers/email/google/domain/entities/user.entity"
//import { MongoDBAL } from "../../shared/persistence/data/data_sources/external/mongodb/mongodb.dbal";
const debug_1 = __importDefault(require("debug"));
//https://www.youtube.com/watch?v=TE_gZdWNDyg&ab_channel=BackbenchCoder
const env_1 = require("./env");
const api = (0, express_1.default)();
if (!env_1.config.port) {
    console.log(`Error to get enviroment config ports`);
    process.exit(1);
}
const debugLog = (0, debug_1.default)("api");
const app = (0, app_1.initializeApp)(env_1.firebaseConfig);
const auth = (0, auth_1.getAuth)(app);
auth.languageCode = 'es';
//---------------- CONNECT TO DATABASE(MONGODB) -----------------------
// const dbal: MongoDBAL = MongoDBAL.getInstance();
// dbal.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
//---------------- SECURITY WITH OAUTH2 -----------------------
// Middlewares
// Cookies
api.use((0, express_session_1.default)({
    secret: "🍪 session of clinica visual y auditiva api",
    cookie: {
        maxAge: 60000 * 60 * 24, // 1 day
        //secure: true
    },
    saveUninitialized: false,
    resave: false,
    //name: "secret-cva"
}));
// Swagger
api.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
// Passport
api.use(passport_1.default.initialize());
api.use(passport_1.default.session());
//   new passportGithub.Strategy(
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
passport_1.default.use(new GoogleStrategy(env_1.googleConfig, async (_accessToken, _refreshToken, profile, cb) => {
    try {
        //   // Sign in to Firebase with the Google access token
        const credential = auth_1.GoogleAuthProvider.credential(null, _accessToken);
        const userCredential = await (0, auth_1.signInWithCredential)(auth, credential);
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
//---------------- JSON RULES -------------------------------
// Automatically allow cross-origin requests
api.use((0, cors_1.default)({ origin: true }));
// Using req.body with POST Parameters to support
// JSON-encoded and URL-encoded bodies.
api.use(express_1.default.json());
api.use(express_1.default.urlencoded({ extended: true }));
// here we are configuring the expressWinston logging middleware,
// which will automatically log all HTTP requests handled by Express.js
api.use(logger_middlerware_1.winstonLogger);
//------------------- ERROR MANAGER LAYER -------------------
// adding the error handlers
api.use(error_logger_middleware_1.errorLogger);
// api.use(errorResponder);
// api.use(invalidPathHandler);
//----------------------- CONFIG ROUTE RULES --------------------------------
// here we are adding the UserRoutes to our array,
// after sending the Express.js apilication object to have the routes added to our api!
const routes = [new crm_routes_1.default(api), new auth_routes_1.AuthRoutes(api)];
exports.default = api;
