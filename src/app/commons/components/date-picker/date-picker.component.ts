import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgbDateStruct} from "@commons/ngb/datepicker/ngb-date-struct";
import {NgbCalendar} from "@commons/ngb/datepicker/ngb-calendar";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor, OnInit {

  @Input() public parentForm!: FormGroup;
  @Input() public fieldName!: string;
  @Input() public label!: string;
  @Input() public placeholder: string = '';

  public model!: NgbDateStruct;
  public today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) { }

  get formField (): FormControl {
    return this.parentForm?.get( this.fieldName ) as FormControl;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  ngOnInit(): void {
  }
}
