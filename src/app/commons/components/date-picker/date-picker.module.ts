import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import {FormsModule} from "@angular/forms";
import {IconModule} from "@commons/components/icon/icon.module";
import {NgbDatepickerModule} from "@commons/ngb/datepicker/datepicker.module";

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    IconModule
  ],
  exports: [
    DatePickerComponent
  ],
})
export class DatePickerModule { }
