import express, { Application, Request, Response } from 'express';
import { flights } from './data/historyFlights';
import flightRouter from './routes/flights.route';

const app: Application = express();
const port: number = 3000;
const baseUrl: string = '/api/v1';

app.use(express.json());
app.use(`${baseUrl}/flights`, flightRouter);

app.get(`${baseUrl}/`, (req: Request, res: Response) => {
    res.json({ message: 'Servidor rodando...' });
});

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}${baseUrl}/`)
);
