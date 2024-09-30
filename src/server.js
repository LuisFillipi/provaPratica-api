import express, { request, response} from 'express';
import conn from './config/conn.js';
import "dotenv/config"

import routerPalestrante from './router/routerPalestrante.js';
import routerParticipante from './router/routerParticipante.js';

import "./models/palestranteModel.js"
import "./models/participanteModel.js"

const PORT = process.env.PORT  || 3333;
const app = express();

app.use(express.json());

//utilizar as rt
app.use('/palestrante', routerPalestrante);
app.use('/participantes', routerParticipante)

app.get("*", (request, response)=>{
    response.status(404).json({message: "rota nao encontrada, ajuda jesus!!!!!!"});
})

app.listen(PORT, () => {
  console.log( `Servidor on no servidor ${PORT} `);
});
