const { getDateTime } = require("./db");

const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

// SETUP THE LOGGER
app.use(morgan("tiny"));

app.get("/", async (req, res) => {
  const dateTime = await getDateTime();
  const response = dateTime;
  response.api = "node";
  res.send(response);
});

app.get("/ping", async (req, res) => {
  res.send("ping");
});

const server = app.listen(port, () => {
  console.log(`App is listing on ${port}`);
});

process.on("SIGTERM", () => {
  console.debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.debug("HTTP SERVER CLOSED");
  });
});
