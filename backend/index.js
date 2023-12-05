const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('myDatabaseFile.db');

db.serialize(() => {
  db.run(`CREATE TABLE Users (
    Id INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Email VARCHAR(100)
  )`);

  db.run(`INSERT INTO Users (Id, Name, Age, Email) VALUES (1, 'Charlie', 55, 'charlie@yahoo.com')`);

  db.each("SELECT * FROM Users", (err, row) => {
      console.log(row);
  });
});

db.close();