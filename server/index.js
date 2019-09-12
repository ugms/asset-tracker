'use strict'

// dependencies
import express from 'express'
import path from 'path'

// set our express options
const app = express();
app.set('port', process.env.PORT || 3000);
const REACT_DIR = path.join(__dirname, '../client'); // NEW
const HTML_FILE = path.join(REACT_DIR, 'index.html'); // NEW

// placeholders
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
app.use(express.static(REACT_DIR)); // NEW
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); // EDIT
});

// face the world
const hotPort = app.get('port');
const server = app.listen(hotPort, () => {
    console.log(`App listening on port ${hotPort}!`)
});

// for Mocha/Chai test purposes
export default server;