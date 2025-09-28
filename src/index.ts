import express, { Application, Request, Response } from 'express';
import flightRouter from './routes/flights.route';
import 'dotenv/config';

const app: Application = express();
const port: string = process.env.PORT!;
const baseUrl: string = process.env.BASE_URL!;

app.use(express.json());
app.use(`${baseUrl}/flights`, flightRouter);

app.get(
    `${baseUrl}/`,
    async (req: Request, res: Response): Promise<Response> => {
        return res.json({ message: 'Servidor rodando...' });
    }
);

// Inicializa o servidor e o disponibiliza na porta definida
app.listen(port, async () =>
    console.log(`Server running on http://localhost:${port}${baseUrl}/`)
);
