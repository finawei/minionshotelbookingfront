import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/reservation';
import * as moment from 'moment';
import { UserService } from './user.service';
import { Token } from '../model/token';
import { TokenService } from './token.service';
import { LoginService } from './login.service';



@Injectable()
export class ReservationService {
    constructor(private http: Http,
        private userService: UserService,
        private tokenService: TokenService) { }
    public saveReservation(reservation: Reservation) {
        const url = `http://localhost:8080/user/${this.userService.user.username}/dateregistration`;
        const body = {
            checkinDate: moment(reservation.checkinDate).format('YYYY-MM-DD'),
            checkoutDate: moment(reservation.checkoutDate).format('YYYY-MM-DD')
        };
        const headers = new Headers();
        const token = 'Bearer ' + this.tokenService.token.access_token;
        headers.append('Authorization', token);
        // send post request
        return this.http.post(url, body, { headers: headers });
    }

    public checkReservation() {
        const headers = new Headers();
        const token = 'Bearer ' + this.tokenService.token.access_token;
        headers.append('Authorization', token);
        console.log(headers);
        const url = `http://localhost:8080/user/${this.userService.user.username}/dateregistration`;
        return this.http.get(url, { headers: headers });
    }

    public listAllBooking() {
        const headers = new Headers();
        const token = 'Bearer ' + this.tokenService.token.access_token;
        headers.append('Authorization', token);
        console.log('headers' + headers);
        const url = `http://localhost:8080/dateregistration`;
        return this.http.get(url, { headers: headers});
    }

    public deleteAll() {
        const headers = new Headers();
        const token = 'Bearer ' + this.tokenService.token.access_token;
        headers.append('Authorization', token);
        console.log(headers);
        const url = `http://localhost:8080/user/${this.userService.user.username}/dateregistration`;
        return this.http.delete(url, { headers: headers });
    }

    public deleteOneBooking(id: number) {
        const headers = new Headers();
        const token = 'Bearer ' + this.tokenService.token.access_token;
        headers.append('Authorization', token);
        console.log(headers);
        const url = `http://localhost:8080/user/${this.userService.user.username}/dateregistration/${id}`;
        return this.http.delete(url, { headers: headers });

    }
    // move this service to admin service
    public sendEmail () {
        const headers = new Headers();
        const token = 'Bearer' + this.tokenService.token.access_token;
        headers.append('Authorization', token);
        console.log (headers);
        const url = 'http://localhost:8080/admin/email';
        return this.http.get(url, {headers: headers});
    }
}
