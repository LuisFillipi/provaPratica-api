import express from 'express';
import conn from '../config/conn.js';

const router = express.Router();

router.post('/palestrantes', (request, response) => {

  const { nome, cargo, telefone, } = request.body;
  const query = 'INSERT INTO palestrantes (nome, cargo, telefone) VALUES (?, ?, ?)';

  conn.query(query, [nome, cargo, telefone], (err, result) => {
    if (err) 
    console.error(err);
    response.status(200).json({err: "Palestrante adicionado com sucesso!"});
    return
  });
});

router.get('/palestrantes', (request, response) => {
  const query = 'SELECT * FROM palestrantes';
  conn.query(query, (err, results) => {
    if (err) 
    console.error(err);
    response.json(results);
  });
});

export default router;
