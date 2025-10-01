import 'dotenv/config';
import app from './app/app.js';

// Numero de porta obtido de env
const port: string = process.env.PORT || '3000';

// Inicia o servidor na porta informada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/flights`);
});
