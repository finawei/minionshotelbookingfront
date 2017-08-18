import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public checkinDate: Date;
public checkoutDate: Date;
public bookingDates: any[];

constructor(private http: HttpClient) {}

// post checkin and checkout date to back end
public save() {
console.log(this.checkinDate);
const body = {checkinDate: this.checkinDate, checkoutDate: this.checkoutDate};
console.log(body);
// send post request
this.http.post('http://localhost:8080/dateregistration', body).subscribe((data) => {
  alert('Reservation saved!');
});
}


// get checkin and checkout overview
public overview() {
this.http.get('http://localhost:8080/dateregistration').subscribe((data: any) => {
console.log(data);
this.bookingDates = data;
  });
}

// clear all bookings
public clear() {
this.http.delete('http://localhost:8080/dateregistration').subscribe( () => {
this.bookingDates = null;
  });
}

}
