import { Injectable, OnInit, Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
    public user: User;

    constructor(private http: HttpClient, private registerService: RegisterService,
        private router: Router, private userService: UserService) {}
ngOnInit() {
    this.user = new User();
}
public register() {
    this.registerService.createNewUser(this.user).subscribe(() => {
        this.userService.user = this.user;
        console.log(this.user);
        alert ('Has sucessfully registered');
    }, (error: any) => {
        if (error.status === 0 ) {
            alert('Server is down');
        }else {
            alert('Oops, unexpected error');
        }
    });
}

public navLogin() {
    this.router.navigate(['/login']);
}
}

