import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ReservationService} from './service/reservation.service';
import { Reservation} from './model/reservation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public reservation: Reservation;
public bookingDates: any[];

constructor(private http: HttpClient, private reservationService: ReservationService) {
  this.reservation = new Reservation();
}


// post checkin and checkout date to back end
public save() {
  this.reservationService.saveReservation(this.reservation).subscribe();
}



// get checkin and checkout overview
public overview() {
  this.reservationService.checkReservation().subscribe((data: any) => {this.bookingDates = data; });
}

// clear all bookings
public clear() {
    this.reservationService.deleteAll().subscribe(() => {this.bookingDates = null;
    });
}

}
