import RouteInterface from './RouteInterface';

/**
 * Define o formato para FlightData
 */
export default interface FlightDataInterface {
    date: string;
    balance: number;
    route: RouteInterface;
    xp: number;
    missionBonus: number;
}
