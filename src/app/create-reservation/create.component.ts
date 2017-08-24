import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ReservationService} from '../service/reservation.service';
import { Reservation} from '../model/reservation';
import { Router} from '@angular/router';
import { OnInit} from '@angular/core';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  // styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
public reservation: Reservation;


constructor(private http: HttpClient, private reservationService: ReservationService, private router: Router) {
}

ngOnInit() {
  this.reservation = new Reservation();

}


// post checkin and checkout date to back end
public save() {
  this.reservationService.saveReservation(this.reservation).subscribe(() => {
    // navigate to overview page
     this.router.navigate(['/overview']); // navigate to overview page
     console.log(this.reservation);
  }, (error: any) => {
    alert('Invalid Dates');
  });
}


}
