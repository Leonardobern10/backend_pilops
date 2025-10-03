import { checkParam } from '../validations/paramsValidation.js';
import { flights } from '../data/historyFlights.js';
import { Request, Response, Router } from 'express';
import { getScore } from '../services/flights.service.js';

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
    const page: number = checkParam(req.query.page, 1);
    // Envia um limite de registros fornecidos pelo usuário, ou
    // 10 se nada tiver sido fornecido.
    const limit: number = checkParam(req.query.limit, 10);

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

flightRouter.get(
    '/score',
    async (req: Request, res: Response): Promise<Response> => {
        console.log('Rota /score acionada');
        try {
            let score = await getScore();
            console.log(score);
            return res.status(200).json({ ...score });
        } catch (error) {
            return res.status(500).json({ error: 'Erro on get score' + error });
        }
    }
);

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
                return res.status(200).json({ flight: currentFlight });
            }
            return res
                .status(404)
                .json({ error: 'Error on search this flight.' });
        }
        return res.status(400).json({ error: 'Error to get id flight.' });
    }
);

// Exportação do Router para disponibilizar à aplicação
export default flightRouter;
