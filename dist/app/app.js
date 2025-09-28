import express from 'express';
import flightRouter from '../routes/flights.route.js';
// Inicializa uma applicação express
const app = express();
// Path padrão obtido de env
const baseUrl = process.env.BASE_URL;
// Define que o formato utlizado será JSON
app.use(express.json());
// rota principal para historico de vôos
app.use(`${baseUrl}/flights`, flightRouter);
// rota de teste
app.get(`${baseUrl}/`, async (req, res) => {
    return res.json({ message: 'Servidor rodando...' });
});
export default app;
