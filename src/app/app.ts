import express, { Application, Request, Response } from 'express';
import flightRouter from '../routes/flights.route.js';
import cors from 'cors';

// Inicializa uma applicação express
const app: Application = express();

// Informa caso a variável não seja definida
if (!process.env.CLIENT_URL) {
    throw new Error('CLIENT_URL não definido nas variáveis de ambiente');
}

// Path padrão obtido de env
const client: string = process.env.CLIENT_URL;

// Define que o formato utlizado será JSON
app.use(express.json());

// Definição do cors para permitir que uma aplicação externa faça a consulta dos dados
app.use(cors({ origin: client, methods: ['GET'] }));

// rota de teste
app.get(`/`, async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ message: 'Servidor online...' });
});

// rota principal para historico de vôos
app.use('/flights', flightRouter);

export default app;
