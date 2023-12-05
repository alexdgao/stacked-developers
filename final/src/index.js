const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('myDatabaseFile.db');

db.serialize(() => {
  db.run(`CREATE TABLE Users (
    Id INT PRIMARY KEY,
    Email VARCHAR(100),
    Password VARCHAR(50)
  )`);

  db.run(`INSERT INTO Users (Id, Email, Password) VALUES (1, 'charlie@yahoo.com', '1234')`);

  db.each("SELECT * FROM Users", (err, row) => {
      console.log(row);
  });
});

db.close();