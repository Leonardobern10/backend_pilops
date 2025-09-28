import { Request, Response, Router } from 'express';
import { flights } from '../data/historyFlights.js';

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
    res.json({ flights: flights });
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
