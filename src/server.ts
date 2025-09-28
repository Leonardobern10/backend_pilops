import 'dotenv/config';
import app from './app/app';

const port: string = process.env.PORT!;
const baseUrl: string = process.env.BASE_URL!;

app.listen(port, async () =>
    console.log(`Server running on http://localhost:${port}${baseUrl}/`)
);
