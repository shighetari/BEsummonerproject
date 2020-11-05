const express = require("express");
const server = express();

//global middleware
server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
  const message = process.env.MESSAGE;
  res.send(`<h2>${message}</h2>`);
});

//middleware
function logger(req, res, next) {
  let origin = req.get("host");
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from`,
    origin
  );
  next();
}

module.exports = server;
