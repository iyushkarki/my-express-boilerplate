const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require("../routes/v1");

const app = express();
const PORT = process.env.PORT;

// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// parses cookies 
app.use(cookieParser());
//checks if compression is needed in response bodies
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mounting all available api based on version
app.use("/api", routes);

app.get("/", (req, res) => res.send("Welcome to the Server"));

app.listen(PORT, () => console.log(`Server running at ${PORT}`));

module.exports = app;
