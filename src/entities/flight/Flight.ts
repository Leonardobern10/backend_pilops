import AircraftInterface from '../../interfaces/AircraftInterface';
import FlightDataInterface from '../../interfaces/FlightDataInterface';
import FlightInterface from '../../interfaces/FlightInterface';

export default class Flight implements FlightInterface {
    id: string;
    aircraft: AircraftInterface;
    flightData: FlightDataInterface;

    constructor(
        id: string,
        aircraft: AircraftInterface,
        flightData: FlightDataInterface
    ) {
        this.id = id;
        this.aircraft = aircraft;
        this.flightData = flightData;
    }
}
