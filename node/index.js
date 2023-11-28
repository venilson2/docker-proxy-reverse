const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql');

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);
    connection.query(query, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({'docker': '<h1>Full Cycle Rocks!</h1>', 'results': results});
      }
      connection.end();
    })
  });
}

app.get('/', async (req, res) => {
  try {
    const person = {
      name: 'Venilson'
    };

    const insertQuery = 'INSERT INTO tb_peoples (name) VALUES (?)';

    const selectQuery = 'SELECT * FROM tb_peoples';

    await executeQuery(insertQuery, [person.name]);

    const result = await executeQuery(selectQuery);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});