import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ReservationService} from './service/reservation.service';
import { Reservation} from './model/reservation';
import * as moment from 'moment';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public bookingDates: any[];

constructor(private http: HttpClient, private reservationService: ReservationService,
  private router: Router) {
}

public navBooking() {
  this.router.navigate(['/create']);
}
public navOverview() {
  this.router.navigate(['/overview']);
}
public navAdmin() {
  this.router.navigate(['/admin']);
}
public navLogOut() {
  this.router.navigate(['/login']);
}
}
