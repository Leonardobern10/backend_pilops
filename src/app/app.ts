import express, { Application, Request, Response } from 'express';
import flightRouter from '../routes/flights.route';

const app: Application = express();
const baseUrl: string = process.env.BASE_URL!;

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
