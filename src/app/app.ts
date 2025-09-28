import express, { Application, Request, Response } from 'express';
import flightRouter from '../routes/flights.route';

// Inicializa uma applicação express
const app: Application = express();
// Path padrão obtido de env
const baseUrl: string = process.env.BASE_URL!;

// Define que o formato utlizado será JSON
app.use(express.json());

// rota principal para historico de vôos
app.use(`${baseUrl}/flights`, flightRouter);

// rota de teste
app.get(
    `${baseUrl}/`,
    async (req: Request, res: Response): Promise<Response> => {
        return res.json({ message: 'Servidor rodando...' });
    }
);

export default app;
