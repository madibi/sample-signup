import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import {NgbDate} from './ngb-date';
import {toInteger} from './../util/util';
import {NgbDatepickerI18n} from './datepicker-i18n';

@Component({
  selector: 'ngb-datepicker-navigation-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-navigation-select.scss'],
  template: `
    <!-- <select #month
      [disabled]="disabled"
      class="form-select"
      i18n-aria-label="@@ngb.datepicker.select-month" aria-label="Select month"
      i18n-title="@@ngb.datepicker.select-month" title="Select month"
      (change)="changeMonth($any($event).target.value)">
        <option *ngFor="let m of months" [attr.aria-label]="i18n.getMonthFullName(m, date?.year)"
                [value]="m">{{ i18n.getMonthShortName(m, date?.year) }}</option>
    </select> -->
    <ng-select
    #month
    title="Select month"
    [clearable]=false
    [searchable]="false"
    class="form-select"
    [(ngModel)]="currentMonth"
    (change)="changeMonth($event)">
      <ng-option *ngFor="let m of months" [value]="m">{{i18n.getMonthShortName(m, date?.year)}}</ng-option>
    </ng-select>
    <!-- <select #year
      [disabled]="disabled"
      class="form-select"
      i18n-aria-label="@@ngb.datepicker.select-year" aria-label="Select year"
      i18n-title="@@ngb.datepicker.select-year" title="Select year"
      (change)="changeYear($any($event).target.value)">
        <option *ngFor="let y of years" [value]="y">{{ i18n.getYearNumerals(y) }}</option>
    </select> -->
    <ng-select
    #year
    title="Select year"
    [clearable]=false
    [searchable]="false"
    class="form-select"
    [(ngModel)]="currentYear"
    (change)="changeYear($event)">
      <ng-option *ngFor="let y of years" [value]="y">{{i18n.getYearNumerals(y)}}</ng-option>
    </ng-select>
  `
})
export class NgbDatepickerNavigationSelect implements AfterViewChecked {
  @Input() date: NgbDate;
  @Input() disabled: boolean;
  @Input() months: number[];
  @Input() years: number[];

  @Output() select = new EventEmitter<NgbDate>();

  @ViewChild('month', {static: true, read: ElementRef}) monthSelect: ElementRef;
  @ViewChild('year', {static: true, read: ElementRef}) yearSelect: ElementRef;

  currentYear: any;
  currentMonth: any;

  private _month = -1;
  private _year = -1;

  constructor(public i18n: NgbDatepickerI18n, private _renderer: Renderer2) {}

  changeMonth(month: string) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); }

  changeYear(year: string) {
    this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
  }

  ngAfterViewChecked() {
    if (this.date) {
      if (this.date.month !== this._month) {
        this._month = this.date.month;
        // this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
        this.currentMonth = this._month;
      }
      if (this.date.year !== this._year) {
        this._year = this.date.year;
        // this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
        this.currentYear = this._year;
      }
    }
  }
}
