const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const dotenv = require('dotenv');
dotenv.config();

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
  next();
});
app.use(express.json());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname + '/public/')));

// app.get("/", (req, res) => {
//   res.status(200).send("Hello Dark World!");
// });

// http://127.0.0.1:80
app.listen(80, ()=>{
  console.log("\x1b[33m[Express]\x1b[0m \x1b[36mServer Listening at PORT 80.\x1b[0m");
})
