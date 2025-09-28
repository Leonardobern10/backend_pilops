import AircraftInterface from './AircraftInterface.js';
import FlightDataInterface from './FlightDataInterface.js';

/**
 * Define o formato para Flight
 */
export default interface FlightInterface {
    id: string;
    aircraft: AircraftInterface;
    flightData: FlightDataInterface;
}
