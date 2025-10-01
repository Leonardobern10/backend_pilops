import 'dotenv/config';
import app from './app/app.js';

// Numero de porta obtido de env
const port: string = process.env.PORT || '3000';

const url: string = process.env.BASE_URL!;

// Inicia o servidor na porta informada
app.listen(port);
