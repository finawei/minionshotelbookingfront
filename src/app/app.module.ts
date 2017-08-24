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
import 'hammerjs';

const appRoutes: Routes = [
    {path: 'overview', component: OverviewComponent},
    {path: 'create', component: CreateComponent},
    {path: '', redirectTo: '/overview',
    pathMatch: 'full'
}
];


@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        OverviewComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [ReservationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
