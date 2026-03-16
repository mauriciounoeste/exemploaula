
const pool = require('../config/db');

async function listar(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM disciplinas');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar disciplinas', detalhe: error.message });
  }
}

module.exports = { listar };
