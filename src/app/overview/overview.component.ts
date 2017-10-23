import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationService } from '../service/reservation.service';
import { Reservation } from '../model/reservation';
import { OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
    // styleUrls: ['./app.component.css']
})
export class OverviewComponent implements OnInit {
    public bookingDates: any[];
    public newBookingDates: any[];
    constructor(private http: HttpClient, private reservationService: ReservationService, private router: Router) {
    }

    ngOnInit() {
        this.overview();
    }

    // get checkin and checkout overview
    public overview() {
        this.reservationService.checkReservation().map(res => res.json()).subscribe((data: any) => {
            this.bookingDates = data;
            console.log('Bookings' + data);
        }, (error: any) => {
        });
    }

    // clear all bookings
    public clear() {
        this.reservationService.deleteAll().subscribe(() => {
            this.bookingDates = null;
        });
    }

    public deleteOneBooking(id: number ) {
        this.reservationService.deleteOneBooking(id)
        .subscribe(() => {
            console.log(id + 'is deleted');
            const index = this.bookingDates.findIndex (x => x.bookingID === id);
            this.bookingDates.splice(index, 1);
            console.log('This is spliced booking list' + this.bookingDates);
            // demonstrate a new booking list
        });
    }
    // delete some
    public deleteSomeBookings(ids: number[]) {
        for (const id of ids) {
            this.reservationService.deleteOneBooking(id)
            .subscribe(() => {
                console.log(id + 'is deleted');
                const index = this.bookingDates.findIndex (x => x.bookingID === id);
                this.bookingDates.splice(index, 1);
                console.log('This is spliced booking list' + this.bookingDates);
            });
        }
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
}
