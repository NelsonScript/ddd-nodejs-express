"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAuthenticated = async (req, res, next) => {
    // console.info("🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱 IS AUTHORIZARED!!! 🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱🎱");
    // console.log("📟", req.originalUrl);
    //let userIsVerify = false;
    // res.redirect('/unauthorized');  
    if (!req.user) {
        req.session.oauth2return = req.originalUrl;
        //return res.redirect('/auth/google');
    }
    next();
};
exports.default = isAuthenticated;
