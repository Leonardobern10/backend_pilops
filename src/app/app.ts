import express, { Application, Request, Response } from 'express';
import flightRouter from '../routes/flights.route.js';
import cors from 'cors';

// Inicializa uma applicação express
const app: Application = express();
// Path padrão obtido de env

// Define que o formato utlizado será JSON
app.use(express.json());

// Informa caso a variável não seja definida
if (!process.env.CLIENT_URL) {
    throw new Error('CLIENT_URL não definido nas variáveis de ambiente');
}

// rota principal para historico de vôos
app.use(
    `flights`,
    cors({
        origin: process.env.CLIENT_URL,
        methods: ['GET']
    }),
    flightRouter
);

// rota de teste
app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ message: 'Servidor online...' });
});

export default app;
