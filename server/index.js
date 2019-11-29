// environment setup
import dotenv from "dotenv";

// dependencies
import express from "express";
import path from "path";
import bodyParser from "body-parser";
const jwt = require("jsonwebtoken");

// SQL / db
import Sequelize from "sequelize";

// const passport = require('passport');
// import passport from "passport";
const passport = require("passport");
import passportJWT from "passport-jwt";

import userController from "./controllers/users";
import assetController from "./controllers/assets";
import authenticationController from "./controllers/authentication";

const result = process.env.NODE_ENV === "development" ? dotenv.config() : false;
if (result) {
  console.log("Node.js running in development mode");
}

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`DATABASE: ${process.env.DATABASE}`)

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);
const models = {
  User: sequelize.import("./models/user"),
  Asset: sequelize.import("./models/asset")
};
Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});


// set our express options
const app = express();
app.set("port", process.env.PORT || 3000);
const REACT_DIR = path.join(__dirname, "../client");
const HTML_FILE = path.join(REACT_DIR, "index.html");
app.use(express.static(REACT_DIR));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());


// JWT Authentication

// JWT Extraction
// let ExtractJwt = passportJWT.ExtractJWT;
const ExtractJwt = require('passport-jwt').ExtractJwt;


// Declare Passport Strategy
// let JwtStrategy = passportJWT.Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "samplesecret"

// Create Strategy
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  let user = getUser({ id: jwt_payload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
passport.use(strategy);

app.use(passport.initialize());


userController(app, models);
assetController(app, models);
authenticationController(app, models);


// face the world
const hotPort = app.get("port");
const server = app.listen(hotPort, () => {
  console.log(`Asset-tracker listening on port ${hotPort}!`);
  sequelize.sync();
});

// for Mocha/Chai test purposes
export default server;
