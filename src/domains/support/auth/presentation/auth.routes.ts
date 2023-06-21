import * as express from "express";
import passport from "passport";
//import jwt from "jsonwebtoken";
import isAuthenticated from "../../../../shared/utils/middlewares/is_authenticated.middleware";
import status from "../../../../config/status";
import { logger } from "../../../../shared/utils/middlewares/logger.middlerware";
import { CommonRoutesConfig } from "../../../../shared/utils/common_routes.config";
//import { IndexController } from "./controllers/index.controller";
import LogoutController from "./controllers/logout.controller"
//import { googleConfig } from "../../../../config/env";


class AuthRoutes extends CommonRoutesConfig {
  constructor(api: express.Application) {
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
              .get((req: express.Request, res: express.Response, next:express.NextFunction) => {
                  new LogoutController().execute(req, res);          
                });

    this.api.route('/protected')
      .get(isAuthenticated, (req: any, res: express.Response, next: express.NextFunction) => {       
        res.send(`<code>${req.user.stsTokenManager.accessToken}</code>`);
      });
           

    this.api.route('/auth/google')
              .get(passport.authenticate('google', { scope: ["profile", "email"] }),
                // Save the url of the user's current page so the app can redirect back to
                // it after authorization
                (req:any, res:any, next:express.NextFunction) => {                
                  if (req.query.return) {
                    req.session.oauth2return = req.query.return;
                  }
                  next();
                });



    this.api.route('/auth/google/callback')
      .get(passport.authenticate('google', {
          successRedirect: '/auth/google/success',
          failureRedirect: '/unauthorized'
      }));

    this.api.route('/auth/google/success')
      .get(isAuthenticated, (req: any, res: express.Response, next: express.NextFunction) => {      
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
      .get((req: express.Request, res: express.Response) => {
       let saludate = "<h1>Bienvenido a la API de la Clinica Visual y Auditiva _(🔅.🔅)_ !!!</h1>";
        //saludate += `Ingresa a <a href="http://localhost:3000/auth/github">Autenticar con cuenta de Github </a>`
        // saludate += `Ingresa a los endpoints GET <a href="http://localhost:3000/v1/customers">Listar clientes </a>`
        // saludate += `POST <a href="http://localhost:3000/v1/customers">Registrar un nuevo cliente </a>`
        saludate += '<p>Para hacer uso de la API obtenga todos los recursos descritos abajo</p>';
        saludate += '<ul>';
        saludate += '<li>Obtener el access token <a href = "https://api.clinicavisualyauditiva.com/auth/google">aquí </a></li>';
        saludate += '<li>Consultar la documentación de la API <a href = "https://api.clinicavisualyauditiva.com/api/docs">aquí</a></li>';
        saludate += '</ul>';
        saludate += "<hr>";        
        saludate += "<small>Última actualización 2023.05.05 | Versión 2.1.0 © Powered by Instituto para Niños Ciegos y Sordos</small>";

      res.status(status.SUCCESS).send(saludate);
    });

    this.api.route("/unauthorized")
      .get((req: express.Request, res: express.Response) => {

        const message = { message: "No estás autorizado" };
        res.status(status.UNAUTHORIZED).send(message);

    });

    return this.api;
  }
 
}

export { AuthRoutes };
