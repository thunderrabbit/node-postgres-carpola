// from  https://codeforgeek.com/node-js-tutorial-step-by-step/

const Pool = require("pg").Pool;
const pool = new Pool({
 user: "godzilla",
 host: "localhost",
 database: "godzilla",
 password: "godzilla",
 port: 5432,
});

// read information from table
pool.query("SELECT * FROM profile ORDER BY id ASC", (error, results) => {
 if (error) {
   console.log(error);
   return;
 }
 console.log(results);
});

// add a new user profile.
const name = "Hello";
const email = "hello@example.com";

pool.query(
 "INSERT INTO profile (name, email) VALUES ($1, $2)",
 [name, email],
 (error, results) => {
   if (error) {
     console.log(error);
     return;
   }
   console.log(results);
 }
);

// read information from table with new row in it
pool.query("SELECT * FROM profile ORDER BY id ASC", (error, results) => {
 if (error) {
   console.log(error);
   return;
 }
 console.log(results);
});

