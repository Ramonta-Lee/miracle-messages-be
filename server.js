const express = require("express");
const server = express();
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const cors = require("cors");
const helmet = require("helmet");
const authenticationRequired = require("./middleware/Okta.js");

//TODO return and test to see if this route is still needed
// const uploadRouter = require("./api/uploadRouter");

const chaptersRouter = require("./api/chapterRouter.js");
const partnerRouter = require("./api/partnerRouter");
const volunteersRouter = require("./api/volunteersRouter.js");

// Helps secure Express apps by setting HTTP headers
server.use(helmet());
// Cross-Origin Resource Sharing
server.use(cors());

// Middleware logging requests
server.use(logger);
// Package for: HTTP request logger
server.use(morgan("dev"));

server.use(fileupload());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({Message:"Hello, I am up and running"});
});

// server.use("/api/upload", uploadRouter);
server.use("/api/volunteer", volunteersRouter);
server.use("/api/chapter", chaptersRouter);
server.use("/api/partner", partnerRouter);
// server.use("/api/form", formRouter);

/**************************************/
/*      Custom Middleware             */
/**************************************/
function logger(req, res, next) {
  const now = new Date().toISOString();
  console.log(`A ${req.method} request to '${req.url}'at ${now}`);
  next();
}

module.exports = server;
