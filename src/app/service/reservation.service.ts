import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reservation} from '../model/reservation';
import * as moment from 'moment';
import { UserService } from './user.service';


@Injectable()
export class ReservationService {
    constructor(private http: HttpClient, private userService: UserService) {}
    public saveReservation( reservation: Reservation) {
        const url = `http://localhost:8080/user/${this.userService.user.id}/dateregistration`;
        const body = {checkinDate: moment(reservation.checkinDate).format('YYYY-MM-DD'),
        checkoutDate: moment(reservation.checkoutDate).format('YYYY-MM-DD')};
        // send post request
        return this.http.post(url, body);
    }

    public checkReservation () {
        // const url = `http://localhost:8080/user/${this.userService.user.id}/dateregistration`;
        return this.http.get('http://localhost:8080/user/${id}/dateregistration');
    }

    public deleteAll () {
        const url = `http://localhost:8080/user/${this.userService.user.id}/dateregistration`;
        return this.http.delete(url);
    }
}
