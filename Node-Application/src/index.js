const { getDateTime } = require("./db");
const express = require("express");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3000;

// Setting up the logger middleware using "morgan" with the "tiny" format.
app.use(morgan("tiny"));

app.get("/", async (req, res) => {
  const dateTime = await getDateTime();
  const response = dateTime;
  response.api = "node-success";
  res.send(response);
});

app.get("/ping", async (req, res) => {
  res.send("ping");
});

const server = app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

process.on("SIGTERM", () => {
  console.debug("SIGTERM signal received: closing HTTP server");

  server.close(() => {
    console.debug("HTTP SERVER CLOSED");
  });
});
