
import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { AppComponent } from '../app.component';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}
public login(user: User) {
    const credentials = 'grant_type=password'
    + '&username=' + user.username
    + '&password=' + user.password;
    const headers = new Headers();
    headers.append('Authorization', 'Basic Z2lneTpzZWNyZXQ=');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
return this.http.post ('http://localhost:8080/oauth/token', credentials, {
    headers: headers
}).map((response: Response) => {
    return response.json();
});

}
}
