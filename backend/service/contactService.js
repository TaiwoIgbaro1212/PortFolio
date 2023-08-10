const pool = require("../config/dbConfig");

async function addContacts(contacts){
  const client = await pool.connect();
  try{
    const { rows } = await client.query(
      `INSERT INTO "Contact".contacttable (name, email, message) VALUES ($1, $2, $3) RETURNING *`,
      [contacts.name, contacts.email, contacts.message]
    );
    return rows[0];
  }catch(err){
    console.log(err);
  }
}

module.exports = {
  addContacts
}
