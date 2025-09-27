import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3000;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.json({ message: 'Olá mundo!' });
});

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}/health`)
);
