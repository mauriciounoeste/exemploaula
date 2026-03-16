const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '168.138.146.29',
  user: 'remoto',
  password: '12345senha',
  database: 'aula4comp',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
