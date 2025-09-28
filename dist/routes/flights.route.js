import { Router } from 'express';
import { flights } from '../data/historyFlights';
const flightRouter = Router();
flightRouter.get('/', async (req, res) => {
    res.json({ flights: flights });
});
flightRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (id) {
        const currentFlight = flights.filter((el) => el.id === id);
        if (currentFlight.length > 0) {
            return res.json({ flight: currentFlight });
        }
        return res.json({ error: 'Error on search this flight.' });
    }
    return res.json({ error: 'Error to get id flight.' });
});
export default flightRouter;
