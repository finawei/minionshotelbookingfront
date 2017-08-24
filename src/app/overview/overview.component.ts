import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ReservationService} from '../service/reservation.service';
import { Reservation} from '../model/reservation';
import { OnInit} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  // styleUrls: ['./app.component.css']
})
export class OverviewComponent implements OnInit {
    public bookingDates: any[];

    constructor(private http: HttpClient, private reservationService: ReservationService) {
    }

    ngOnInit () {
        this.overview();
    }

    // get checkin and checkout overview
    public overview() {
        this.reservationService.checkReservation().subscribe((data: any) => {
        this.bookingDates = data;
        console.log(data);
        }, (error: any) => {
        alert('Invalid Dates');
        });
    }

    // clear all bookings
    public clear() {
        this.reservationService.deleteAll().subscribe(() => {this.bookingDates = null;
        });
    }
}
