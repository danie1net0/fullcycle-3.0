const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'desafio_node',
  database: 'desafio_node',
});

app.get('/', (req, res) => {
  const { name } = req.query;

  if (name) {
    connection.query(`INSERT INTO people (name) VALUES ('${name}')`);
  }

  connection.query('SELECT name FROM people', (_, rows) => {
    const names = rows?.map(row => `<li>${row.name}</li>`).join('');
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${names}</ul>`);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

