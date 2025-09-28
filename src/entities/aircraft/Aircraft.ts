import AircraftInterface from '../../interfaces/AircraftInterface';

export default class Aircraft implements AircraftInterface {
    name: string;
    registration: string;
    airlane: string;

    constructor(name: string, registration: string, airlane: string) {
        this.name = name;
        this.registration = registration;
        this.airlane = airlane;
    }
}
