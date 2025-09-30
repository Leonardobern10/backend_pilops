import express from 'express';
import flightRouter from '../routes/flights.route.js';
import cors from 'cors';
// Inicializa uma applicação express
const app = express();
// Path padrão obtido de env
const baseUrl = process.env.BASE_URL;
// Definição do cors para permitir que uma aplicação externa faça a consulta dos dados
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET']
}));
// Define que o formato utlizado será JSON
app.use(express.json());
// rota principal para historico de vôos
app.use(`${baseUrl}/flight`, flightRouter);
// rota de teste
app.get(`${baseUrl}/`, async (req, res) => {
    return res.status(200).json({ message: 'Servidor rodando...' });
});
export default app;
