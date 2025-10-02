import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import app from '../src/app/app';
import { flights } from '../src/data/historyFlights';

beforeAll(() => {
    process.env.CLIENT_URL = 'http://localhost:5173';
    process.env.BASE_URL = '/';
});

describe('Flight Router', () => {
    const basePath = `${process.env.BASE_URL}flights`;
    it('GET /flights?page=1&limit=10 -> deve retornar lista de voos', async () => {
        // Ao fazer um GET na rota '/flights' com os query params
        //informando page e limit
        const res = await request(app)
            .get(basePath)
            .query({ page: 1, limit: 10 });

        // Espera-se status de retorno 200 - OK
        expect(res.status).toBe(200);
        // Espera-se que no corpo da resposta tenha a propriedade 'flights'
        expect(res.body).toHaveProperty('flights');
        // Espera-se que no corpo da resposta não seja uma array vazio
        expect(res.body.flights.length).toBeGreaterThan(0);
        expect(res.body).toHaveProperty('page', 1);
        expect(res.body).toHaveProperty('limit', 10);
    });

    it('GET /flights/:id -< deve retornar os detalhes de um vôo específico', async () => {
        // Pega um id de um voo especifico como teste (SIMULAÇÃO)
        const id = flights[0].id;

        // Faz a requisição, passando o id como parametro e armazena a resposta
        const res = await request(app).get(`${basePath}/${id}`);

        // Verifica se o status é 200 - OK
        expect(res.status).toBe(200);
        // Verifica se o JSON tem a propriedade 'flight'
        expect(res.body).toHaveProperty('flight');
        // Verifica se o tamanho do array é 1 (unico registro)
        expect(res.body.flight.length).toBe(1);
    });

    it('GET /flights -> deve retornar uma lista de vôos padrão sem valores passados', async () => {
        const res = await request(app).get(basePath);

        // Espera-se status de retorno 200 - OK
        expect(res.status).toBe(200);
        // Espera-se que no corpo da resposta tenha a propriedade 'flights'
        expect(res.body).toHaveProperty('flights');
        // Espera-se que no corpo da resposta o array tenha tamanho 10
        expect(res.body.flights.length).toBe(10);
        expect(res.body).toHaveProperty('page', 1);
        expect(res.body).toHaveProperty('limit', 10);
    });
});
