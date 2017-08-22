import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reservation} from '../model/reservation';

@Injectable()
export class ReservationService {
    constructor(private http: HttpClient) {}
    public saveReservation( reservation: Reservation) {

        // send post request
        return this.http.post('http://localhost:8080/dateregistration', reservation);
    }

    public checkReservation () {
        return this.http.get('http://localhost:8080/dateregistration');
    }

    public deleteAll () {
        return this.http.delete('http://localhost:8080/dateregistration');
    }
}
