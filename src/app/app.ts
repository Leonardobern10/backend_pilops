import express, { Application, Request, Response } from 'express';
import flightRouter from '../routes/flights.route.js';
import cors from 'cors';

// Inicializa uma applicação express
const app: Application = express();

// Path padrão obtido de env
const client: string = process.env.CLIENT_URL || 'http://localhost:5173';

// Definição do cors para permitir que uma aplicação externa faça a consulta dos dados
app.use(cors({ origin: client, methods: ['GET'] }));

// Define que o formato utlizado será JSON
app.use(express.json());

// Informa caso a variável não seja definida
if (!process.env.CLIENT_URL) {
    throw new Error('CLIENT_URL não definido nas variáveis de ambiente');
}

// rota principal para historico de vôos
app.use(`/flights`, flightRouter);

// rota de teste
app.get(`/`, async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ message: 'Servidor online...' });
});

export default app;
