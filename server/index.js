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
import passport from "passport";
import passportJWT from "passportJWT";

import userController from "./controllers/users";
import assetController from "./controllers/assets";

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
let ExtractJwt = passportJWT.ExtractJWT;

// Declare Passport Strategy
let JWTStrategy = passportJWT.Strategy;
let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "samplesecret"

// Helper Function (For Authentication)
const getUser = async obj => {
  return await User.findOne({
  where: obj,
  });
};

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

app.use(passport.initalize());

// Test login route
app.post("/auth-login", async function(req, res, next) {
  const { username, password } = req.body;
  if (username && password) {
    // we get the user with the name and save the resolved promise
    returned
    let user = await getUser({ username });
    if (!user) {
      res.status(401).json({ msg: "No such user found", user });
    }
   if (user.password === password) {
      // from now on we’ll identify the user by the id and the id is
      // the only personalized value that goes into our token
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: ‘ok’, token: token });
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
});

// Sample Protected Route
app.get("/protected", passport.authenicate("jwt", {session: false}), function(req, res) {
  res.json({msg: "Success, you are seeing this because you are authorized"});
});



userController(app, models);
assetController(app, models);


// face the world
const hotPort = app.get("port");
const server = app.listen(hotPort, () => {
  console.log(`Asset-tracker listening on port ${hotPort}!`);
  sequelize.sync();
});

// for Mocha/Chai test purposes
export default server;
