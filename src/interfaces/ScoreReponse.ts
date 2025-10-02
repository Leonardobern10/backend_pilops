import FlightInterface from './FlightInterface.js';

/**
 * Tipagem para a resposta de /score
 */
export interface ScoreResponse {
    balance: string;
    xp: string;
    missionBonus: string;
    maxBalance: FlightInterface;
    minBalance: FlightInterface;
}
