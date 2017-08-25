import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reservation} from '../model/reservation';
import * as moment from 'moment';

@Injectable()
export class ReservationService {
    constructor(private http: HttpClient) {}
    public saveReservation( reservation: Reservation) {
        const body = {checkinDate: moment(reservation.checkinDate).format('YYYY-MM-DD'),
        checkoutDate: moment(reservation.checkoutDate).format('YYYY-MM-DD')};
        // send post request
        return this.http.post('http://localhost:8080/dateregistration', body);
    }

    public checkReservation () {
        return this.http.get('http://localhost:8080/dateregistration');
    }

    public deleteAll () {
        return this.http.delete('http://localhost:8080/dateregistration');
    }
}
