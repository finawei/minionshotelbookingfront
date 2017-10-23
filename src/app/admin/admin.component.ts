import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationService } from '../service/reservation.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.css']
    }
)
export class AdminComponent implements OnInit {
    public bookings: any[];
    constructor(private http: HttpClient, private reservationService: ReservationService,
    private router: Router) {
    }
    ngOnInit() {
        this.adminOverview();
    }
    public adminOverview() {
        this.reservationService.listAllBooking().map(res => res.json()).subscribe((data: any) => {
            this.bookings = data;
            console.log(data);
        }, (error: any) => {
            if (error.status === 403) {
                alert ('You are not admin');
            }
        });
    }

    public sendEmail() {
        this.reservationService.sendEmail().map(res => res.json()).subscribe( () => {
        });
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




