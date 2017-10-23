import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MatButtonModule, MatCheckboxModule,
    MatDatepickerModule, MatInputModule,
    MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule,
    MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatFormFieldModule
} from '@angular/material';


@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatTableModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule
    ],
    declarations: []
})
export class MaterialModule { }
