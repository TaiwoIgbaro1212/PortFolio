const pool = require('./config/dbConfig');




function createTables() {
  pool.query("CREATE SCHEMA IF NOT EXISTS balablu;", (err, result) => {
    if (err) {
      console.error("Error creating schema:", err);
    } else {
      console.log("Schema created successfully");

      pool.query(
        `CREATE TABLE IF NOT EXISTS balablu.messages(
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Table 'users' successfully created");
          }
        }
      );
    }
  });

  
}

createTables();
