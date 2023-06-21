import * as express from "express";

const isAuthenticated = async (req: any, res: express.Response, next: express.NextFunction) => {    
  //let userIsVerify = false;
   
  // res.redirect('/unauthorized');  
  if (req.user) {
    req.session.oauth2return = req.originalUrl;
    //
    next();
  }

  if (!req.user) {
    res.redirect('/unauthorized');
  }
  
  return false;
}

export default isAuthenticated;