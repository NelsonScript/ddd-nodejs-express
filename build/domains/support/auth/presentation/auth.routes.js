"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const passport_1 = __importDefault(require("passport"));
//import jwt from "jsonwebtoken";
const is_authenticated_middleware_1 = __importDefault(require("../../../../shared/utils/middlewares/is_authenticated.middleware"));
const status_1 = __importDefault(require("../../../../config/status"));
const common_routes_config_1 = require("../../../../shared/utils/common_routes.config");
//import { IndexController } from "./controllers/index.controller";
const logout_controller_1 = __importDefault(require("./controllers/logout.controller"));
//import { googleConfig } from "../../../../config/env";
class AuthRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(api) {
        super(api, "AuthRoutes", "customer");
    }
    configureRoutes() {
        /// Index
        // this.api.route('/login')
        //   .get(isAuthenticated,
        //     (req: express.Request, res: express.Response, next:express.NextFunction) => {
        //       //new IndexController().execute(req, res);
        //       res.send('<form action="/login" method="post">' +
        //         'Username: <input name="user"><br>' +
        //         'Password: <input name="pass" type="password"><br>' +
        //         '<input type="submit" text="Login"></form>')
        //     });
        this.api.route('/logout')
            .get((req, res, next) => {
            new logout_controller_1.default().execute(req, res);
        });
        this.api.route('/protected')
            .get(is_authenticated_middleware_1.default, (req, res, next) => {
            res.send(`<code>${req.user.stsTokenManager.accessToken}</code>`);
        });
        this.api.route('/auth/google')
            .get(passport_1.default.authenticate('google', { scope: ["profile", "email"] }), 
        // Save the url of the user's current page so the app can redirect back to
        // it after authorization
        (req, res, next) => {
            if (req.query.return) {
                req.session.oauth2return = req.query.return;
            }
            next();
        });
        this.api.route('/auth/google/callback')
            .get(passport_1.default.authenticate('google', {
            successRedirect: '/auth/google/success',
            failureRedirect: '/unauthorized'
        }));
        this.api.route('/auth/google/success')
            .get(is_authenticated_middleware_1.default, (req, res, next) => {
            //console.table(req.session);                  
            delete req.session.oauth2return;
            res.redirect("/protected");
        });
        // this.api.route("/auth/github")
        //   .get(passport.authenticate('github'));    
        // /// Authorized    
        // this.api.route("/auth/github/callback")
        //   .get(passport.authenticate('github', {
        //     failureRedirect: "/unauthorized", //other you could use are /forbiddent,/failure, etc
        //     successRedirect: "/readme",
        //   }));
        this.api.route("/")
            .get(is_authenticated_middleware_1.default, (req, res) => {
            let saludate = "<h1>Bienvenido a la API de la Clinica Visual y Auditiva _(🔅.🔅)_ !!!</h1>";
            //saludate += `Ingresa a <a href="http://localhost:3000/auth/github">Autenticar con cuenta de Github </a>`
            // saludate += `Ingresa a los endpoints GET <a href="http://localhost:3000/v1/customers">Listar clientes </a>`
            // saludate += `POST <a href="http://localhost:3000/v1/customers">Registrar un nuevo cliente </a>`
            saludate += '<p>Ver la documentación completa de la API en <a href="https://api.clinicavisualyauditiva.com/api/docs"></a></p>';
            saludate += "<hr>";
            saludate += "<small>Última actualización 2023.05.05 | Versión 2.1.0 © Powered by Instituto para Niños Ciegos y Sordos</small>";
            res.status(status_1.default.SUCCESS).send(saludate);
        });
        this.api.route("/unauthorized")
            .get((req, res) => {
            const message = { message: "No estás autorizado" };
            res.status(status_1.default.UNAUTHORIZED).send(message);
        });
        return this.api;
    }
}
exports.AuthRoutes = AuthRoutes;
