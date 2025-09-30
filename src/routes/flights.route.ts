import { flights } from 'data/historyFlights.js';
import { Request, Response, Router } from 'express';

/**
 * Router responsável por gerenciar as rotas direcionadas para `/flights`
 */
const flightRouter: Router = Router();

/**
 * Rota principal que retorna todos os registros do historico de vôos
 *
 * @returns{JSON} - Retorna todos os registros do historico de voos
 */
flightRouter.get('/', async (req: Request, res: Response) => {
    // Começa na pagina especificada na query params ou na 1,
    // caso ela nao seja fornecida.
    const page: number = parseInt(req.query.page as string) || 1;
    // Envia um limite de registros fornecidos pelo usuário, ou
    // 10 se nada tiver sido fornecido.
    const limit: number = parseInt(req.query.limit as string) || 10;

    // Como a primeira pagina corresponde à pagina 0,
    // aqui tratamos e garantimos ao usuario que ele visualize
    // o que de fato deseja
    const start: number = (page - 1) * limit;
    const end: number = page * limit;

    // Aqui pegamos um pedaço do array, começando em
    // `start` e terminando em `end`
    const historyFlights = flights.slice(start, end);

    // Aqui montados o JSON estruturando as respostas
    res.json({
        page, // Exibe a pagina atual
        limit, // Exibe a quantidade de dados buscados
        total: flights.length, // Exibe o total de dados disponiveis
        totalPages: Math.ceil(flights.length / limit), // Calcula e exibe o total de paginas
        flights: historyFlights // Exibe os dados buscados
    });
});

/**
 * Rota que retorna os detalhes de um vôo específico
 *
 * @param{id} - Id único de um registro específico
 * @returns{JSON} - Retorna os detalhes de um vôo específico, caso exista
 */
flightRouter.get(
    '/:id',
    async (req: Request, res: Response): Promise<Response> => {
        const id = req.params.id;
        if (id) {
            const currentFlight = flights.filter((el) => el.id === id);
            if (currentFlight.length > 0) {
                return res.json({ flight: currentFlight });
            }
            return res.json({ error: 'Error on search this flight.' });
        }
        return res.json({ error: 'Error to get id flight.' });
    }
);

// Exportação do Router para disponibilizar à aplicação
export default flightRouter;
