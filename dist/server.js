import 'dotenv/config';
import app from './app/app.js';
// Numero de porta obtido de env
const port = process.env.PORT;
// Path padrão obtido de env
const baseUrl = process.env.BASE_URL;
// Inicia o servidor na porta informada
app.listen(port, async () => console.log(`Server running on http://localhost:${port}${baseUrl}/`));
