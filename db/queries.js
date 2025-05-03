const pool = require("./pool");


async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}


async function getMessage(id) {
  const { rows } = await pool.query(`
    SELECT * FROM messages
    WHERE id = $1;`, [id]);
    
    return rows[0];
}


async function addMessage(message) {
  console.log(message);
  await pool.query(`
      INSERT INTO messages (username, message, created_at)
      VALUES ($1, $2, $3);`, [message.user, message.text, new Date()]);
}




module.exports = {
  getMessages,
  getMessage,
  addMessage
};