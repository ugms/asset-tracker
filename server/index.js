'use strict'

// environment setup
import dotenv from 'dotenv'
const result = (process.env.NODE_ENV == 'development') ? dotenv.config() : false

// dependencies
import express from 'express'
import path from 'path'

// SQL / db
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);
const models = {
  User: sequelize.import('./models/user'),
};
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

// set our express options
const app = express();
app.set('port', process.env.PORT || 3000);
const REACT_DIR = path.join(__dirname, '../client'); // NEW
const HTML_FILE = path.join(REACT_DIR, 'index.html'); // NEW
app.use(express.static(REACT_DIR)); // NEW

// placeholder route
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); // EDIT
});

// face the world
const hotPort = app.get('port');
const server = app.listen(hotPort, () => {
    console.log(`Example app listening on port ${hotPort}!`)
    sequelize.sync();
});

// for Mocha/Chai test purposes
export default server;