import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ReservationService} from './service/reservation.service';
import { Reservation} from './model/reservation';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public bookingDates: any[];

constructor(private http: HttpClient, private reservationService: ReservationService) {
}



}
