// When no execution file mentioned in the npm start script npm automatically
// runs the node server.js file if available in the project directory.
// If you declare a variable, without using "var", the variable always becomes GLOBAL.
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
(mongoose = require("mongoose")),
  (Subs = require("./api/models/track_models")),
  (bodyParser = require("body-parser"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Subsdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/track_routes");
routes(app);

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
