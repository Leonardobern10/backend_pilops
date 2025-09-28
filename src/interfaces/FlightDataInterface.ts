import RouteInterface from './RouteInterface';

export default interface FlightDataInterface {
    date: Date;
    balance: number;
    route: RouteInterface;
    xp: number;
    missionBonus: number;
}
