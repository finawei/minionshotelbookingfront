import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReservationService} from './service/reservation.service';
import { CreateComponent} from './create-reservation/create.component';
import { OverviewComponent} from './overview/overview.component';
import { RouterModule, Routes} from '@angular/router';
import { UserService} from './service/user.service';
import 'hammerjs';
import { TokenService } from './service/token.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { Http, HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './service/register.service';
import { AdminComponent } from './admin/admin.component';



const appRoutes: Routes = [
    {path: 'overview', component: OverviewComponent},
    {path: 'create', component: CreateComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: AdminComponent},
    {path: '', redirectTo: '/login',
    pathMatch: 'full'
}
];


@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        OverviewComponent,
        LoginComponent,
        RegisterComponent,
        AdminComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [ReservationService, UserService, TokenService, LoginService, RegisterService],
    bootstrap: [AppComponent]
})
export class AppModule {
 }
