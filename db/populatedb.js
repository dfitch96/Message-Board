const { Client } = require("pg");
require("dotenv").config();

const messages = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: "dfitch",
    date: new Date()
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    user: "dfitch",
    date: new Date()
  }
];

const client = new Client({
  connectionString: process.env.DB_URL,
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


    
    for(const message of messages) {
      await client.query(insertQuery, [message.user, message.text, message.date]);
    }
   
    
    console.log("message inserted");

  } catch(err) {
    console.log(err);
  } finally {
    await client.end();
  }

}


main();

