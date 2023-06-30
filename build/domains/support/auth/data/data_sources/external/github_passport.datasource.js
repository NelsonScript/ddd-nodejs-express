"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_github_1 = __importDefault(require("passport-github"));
const passport_1 = __importDefault(require("passport"));
class GithubPassportDatasource extends PassportDatasource {
    _strategy;
    constructor(callbackURL) {
        super(callbackURL);
        this._strategy = new passport_github_1.default.Strategy({
            clientID: `${process.env.GITHUB_CLIENT_ID}`,
            clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
            callbackURL: callbackURL
        }, (accessToken, refreshToken, profile, cb) => {
            console.info(profile.id);
            // User.findOrCreate({ githubId: profile.id }, function (err, user) {
            //   return cb(err, user);
            // });
        });
    }
    get strategy() {
        return this._strategy;
    }
    serializeUser(callback) {
        try {
            passport_1.default.serializeUser((user, done) => {
                done(null, user);
            });
        }
        catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    deserializeUser(callback) {
        try {
            passport_1.default.deserializeUser(async (id, done) => {
                //        const user = await User.findById(id);
                //      if (user) done(null, user);
            });
        }
        catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    use() {
        try {
            passport_1.default.use(this.strategy);
        }
        catch (error) {
            throw new Error("Method not implemented.");
        }
    }
}
exports.default = GithubPassportDatasource;
// const { Strategy } = require("passport-discord");
// const passport = require("passport");
// const User = require("../models/User");
// const {
//   DISCORD_CLIENT_ID,
//   DISCORD_CLIENT_SECRET,
//   DISCORD_CLIENT_REDIRECT,
// } = require("../config");
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
// passport.deserializeUser(async (id, done) => {
//   const user = await User.findById(id);
//   if (user) done(null, user);
// });
// passport.use(
//   new Strategy(
//     {
//       clientID: DISCORD_CLIENT_ID,
//       clientSecret: DISCORD_CLIENT_SECRET,
//       callbackURL: DISCORD_CLIENT_REDIRECT,
//       scope: ["identify", "guilds"],
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         const user = await User.findOne({ discordId: profile.id });
//         if (user) return done(null, user);
//         const newUser = new User({
//           discordId: profile.id,
//           username: profile.username,
//           guilds: profile.guilds,
//         });
//         const savedUser = await newUser.save();
//         done(null, savedUser);
//       } catch (error) {
//         console.error(error);
//         return done(err, null);
//       }
//     }
//   )
// );
