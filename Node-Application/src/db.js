const fs = require("fs");
const { Pool } = require("pg");

// If 'DATABASE_URL' is not defined, read the content of the file specified in 'DATABASE_URL_FILE'.
databaseURL = process.env.DATABASE_URL;

const pool = new Pool({
  user: "aditya",
  database: "DockerPractice",
  password: "adityasdatabase",
  port: 5432,
});

/*
 * Listen for errors emitted by the pool. If an idle client encounters an error,
 * log the error and exit the process with a code of -1.
 */
pool.on("error", (err, client) => {
  console.error("UNEXPECTED ERROR ON IDLE CLIENT", err);
  process.exit(-1);
});

const getDateTime = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT NOW() as now;");
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.release();
  }
};

module.exports = { getDateTime };
