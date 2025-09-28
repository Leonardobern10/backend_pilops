import RouteInterface from './RouteInterface';

export default interface FlightDataInterface {
    date: string;
    balance: number;
    route: RouteInterface;
    xp: number;
    missionBonus: number;
}
