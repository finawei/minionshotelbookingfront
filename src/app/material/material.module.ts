import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MdButtonModule, MdCheckboxModule,
    MdDatepickerModule, MdInputModule,
    MdNativeDateModule, MdIconModule, MdSidenavModule, MdListModule, MdMenuModule,
    MdTableModule, MdToolbarModule, MdSelectModule, MdOptionModule,
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdInputModule,
        MdNativeDateModule,
        MdIconModule,
        MdSidenavModule,
        MdListModule,
        MdMenuModule,
        MdTableModule,
        CdkTableModule,
        FlexLayoutModule,
        MdToolbarModule,
        MdSelectModule,
        MdOptionModule
    ],
    exports: [
        MdButtonModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdInputModule,
        MdNativeDateModule,
        MdIconModule,
        MdSidenavModule,
        MdListModule,
        MdMenuModule,
        MdTableModule,
        CdkTableModule,
        FlexLayoutModule,
        MdToolbarModule,
        MdSelectModule,
        MdOptionModule
    ],
    declarations: []
})
export class MaterialModule { }
