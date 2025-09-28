import AircraftInterface from './AircraftInterface';
import FlightDataInterface from './FlightDataInterface';

/**
 * Define o formato para Flight
 */
export default interface FlightInterface {
    id: string;
    aircraft: AircraftInterface;
    flightData: FlightDataInterface;
}
