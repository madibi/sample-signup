import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from '@pages/sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FieldErrorsModule} from "@commons/form/field-errors/field-errors.module";
import {PointModule} from "@commons/components/point/point.module";
import {LinkModule} from "@commons/components/link/link.module";
import {ThemeToggleModule} from "@commons/components/theme-toggle/theme-toggle.module";
import {
  PasswordStrengthCheckerModule
} from "@commons/components/password-strength-checker/password-strength-checker.module";
import {DatePickerModule} from "@commons/components/date-picker/date-picker.module";
import {IconModule} from "@commons/components/icon/icon.module";
import {InputModule} from "@commons/form/input/input.module";
import {ButtonModule} from "@commons/components/button/button.module";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FieldErrorsModule,
    PointModule,
    LinkModule,
    ThemeToggleModule,
    PasswordStrengthCheckerModule,
    DatePickerModule,
    IconModule,
    InputModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
