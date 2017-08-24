import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule,
    MdDatepickerModule, MdInputModule,
    MdNativeDateModule, MdIconModule, MdSidenavModule, MdListModule
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
        MdListModule
    ],
    exports: [
        MdButtonModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdInputModule,
        MdNativeDateModule,
        MdIconModule,
        MdSidenavModule,
        MdListModule
    ],
    declarations: []
})
export class MaterialModule { }
