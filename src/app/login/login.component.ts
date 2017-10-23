import { User } from '../model/user';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { TokenService } from '../service/token.service';
import { Token } from '../model/token';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public user: User;

    constructor(private loginService: LoginService, private tokenService: TokenService,
        private router: Router, private userService: UserService) { }

    ngOnInit() {
        this.user = new User();
    }
    public login() {
        this.loginService.login(this.user).subscribe((token: Token) => {
            if (this.user.username !== 'voilets') {
                this.router.navigate(['/overview']);
            }else {
                this.router.navigate(['/admin']);
            }
            this.tokenService.token = token; // token stored
            this.userService.user = this.user; // user stored
            console.log(this.user, token);
            console.log('role' + this.user.role);
        }, (error: any) => {
            if (error.status === 400) {
                alert('Username and password do not match');
            } else if (error.status === 401) {
                alert('User does not exist');
            }else if (error.status === 500) {
                alert('Server error');
            }else if (error.status === 0) {
                alert('Server is down');
            }
        });
    }



public navRegister() {
    this.router.navigate(['/register']);
}

}
