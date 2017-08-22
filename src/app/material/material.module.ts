import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule,
    MdDatepickerModule, MdInputModule, MdNativeDateModule, MdIconModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdInputModule,
        MdNativeDateModule,
        MdIconModule
    ],
    exports: [
        MdButtonModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdInputModule,
        MdNativeDateModule,
        MdIconModule
    ],
    declarations: []
})
export class MaterialModule { }
