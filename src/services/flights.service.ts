import { flights } from 'data/historyFlights.js';
import FlightInterface from 'interfaces/FlightInterface.js';
import { ScoreResponse } from 'interfaces/ScoreReponse.js';

export const getScore = async (): Promise<ScoreResponse> => {
    let currentFlights = flights;
    return {
        balance: currentFlights
            .reduce((total, valor) => total + valor.flightData.balance, 0)
            .toFixed(2),
        xp: currentFlights
            .reduce((total, valor) => total + valor.flightData.xp, 0)
            .toFixed(2),
        missionBonus: flights
            .reduce((total, valor) => total + valor.flightData.missionBonus, 0)
            .toFixed(2),
        maxBalance: maxValue(currentFlights),
        minBalance: minValue(currentFlights)
    };
};

const maxValue = (flights: FlightInterface[]): FlightInterface => {
    let max = flights[0];
    flights.forEach((el) =>
        el.flightData.balance > max.flightData.balance ? (max = el) : ''
    );
    return max;
};

const minValue = (flights: FlightInterface[]): FlightInterface => {
    let min = flights[0];
    flights.filter((el) =>
        el.flightData.balance < min.flightData.balance ? (min = el) : ''
    );
    return min;
};
