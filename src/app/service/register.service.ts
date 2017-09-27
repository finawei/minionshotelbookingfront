import { Http } from '@angular/http';
import { User } from '../model/user';
import { Injectable } from '@angular/core';
@Injectable()
export class RegisterService {
    constructor(private http: Http) {}
    public createNewUser (user: User) {
    const url = `http://localhost:8080/user`;
    console.log(user);
    const body = {username: user.username, password: user.password};
    return this.http.post(url, body);
    }
}
