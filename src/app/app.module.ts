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


const appRoutes: Routes = [
    {path: 'overview', component: OverviewComponent},
    {path: 'create', component: CreateComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/overview',
    pathMatch: 'full'
}
];


@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        OverviewComponent,
        LoginComponent
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
    providers: [ReservationService, UserService, TokenService, LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }
