const { Client } = require("pg");
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} = process.env;

const message =  {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  user: "dfitch",
  date: new Date()
};


const client = new Client({
  connectionString: `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
});


async function main(){

  console.log("seeding...");

  try {

    await client.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(25),
        message TEXT,
        created_at TIMESTAMP
      );
    `);
    console.log("message table created");

    const insertQuery = `
      INSERT INTO messages (username, message, created_at)
      VALUES  ($1, $2, $3)`;


    await client.query(insertQuery, [message.user, message.text, message.date]);
    
    console.log("message inserted");

  } catch(err) {
    console.log(err);
  } finally {
    await client.end();
  }

}


main();

