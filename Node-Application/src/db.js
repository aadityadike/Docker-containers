const fs = require("fs");

const { Pool } = require("pg");

databaseURL =
  process.env.DATABASE_URL ||
  fs.readFileSync(process.env.DATABASE_URL_FILE, "utf-8");

const pool = new Pool({
  connectionString: databaseURL,
});

/*
 * The pool will emit an error on behalf of any idle clients.
 * It contains if a backend error or network partition happens.
 */

pool.on("error", (err, client) => {
  console.error("UNEXPECTED ERROR ON IDEAL CLIENT", err);
  process.exit(-1);
});

const getDateTime = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT NOW() as now;");
  } catch (err) {
    console.log(err.stack);
  } finally {
    client.release();
  }
};

module.exports = { getDateTime };
