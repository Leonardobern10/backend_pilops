import AircraftInterface from './AircraftInterface';
import FlightDataInterface from './FlightDataInterface';

export default interface FlightInterface {
    id: string;
    aircraft: AircraftInterface;
    flightData: FlightDataInterface;
}
