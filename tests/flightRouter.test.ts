import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app/app';
import { flights } from '../src/data/historyFlights';

const baseURL: string = process.env.BASE_URL!;

describe('Flight Router', () => {
    it('GET /flights -> deve retornar lista de voos', async () => {
        // Ao fazer um GET na rota '/flights'
        const res = await request(app).get(`${baseURL}/flights`);

        // Espera-se status de retorno 200 - OK
        expect(res.status).toBe(200);
        // Espera-se que no corpo da resposta tenha a propriedade 'flights'
        expect(res.body).toHaveProperty('flights');
        // Espera-se que no corpo da resposta não seja uma array vazio
        expect(res.body.flights.length).toBeGreaterThan(0);
    });

    it('GET /flights/:id -< deve retornar os detalhes de um vôo específico', async () => {
        // Pega um id de um voo especifico como teste (SIMULAÇÃO)
        const id = flights[0].id;

        // Faz a requisição, passando o id como parametro e armazena a resposta
        const res = await request(app).get(`${baseURL}/flights/${id}`);

        // Verifica se o status é 200 - OK
        expect(res.status).toBe(200);
        // Verifica se o JSON tem a propriedade 'flight'
        expect(res.body).toHaveProperty('flight');
        // Verifica se o tamanho do array é 1 (unico registro)
        expect(res.body.flight.length).toBe(1);
    });
});
