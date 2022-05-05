import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import {SignUp} from "@commons/models/interfaces/registration-request.interface";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],

})
export class SignUpComponent implements OnInit {

  public signUpFrom!: FormGroup;

  constructor () { }

  public generateSignUpForm (): void {
    this.signUpFrom =
      new FormGroup( {
        fullName: new FormControl(
          '',
          {
            validators: [
              Validators.required,
              UniversalValidators.noEmptyString
            ]
          }
        ),
        email: new FormControl(
          '',
          {
            validators: [
              Validators.required,
              EmailValidators.normal
            ]
          }
        ),
        phoneNumber: new FormControl(
          '',
          {
            validators: [
              Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$")
            ]
          }
        ),
        password: new FormControl(
          '',
          {
            validators: [
              UniversalValidators.noWhitespace
            ]
          }
        ),
        birthDate: new FormControl(
          '',
          {
            validators: [
              UniversalValidators.noWhitespace
            ]
          }
        ),
        favouriteHexCode: new FormControl( '' )
      });
  }

  public submitSignUpForm (): void {
    if ( this.signUpFrom.valid ) {
      const signUp: SignUp = {
        ...this.signUpFrom.value
      };
      console.log( signUp );
    }
  }

  ngOnInit (): void {
    this.generateSignUpForm();
  }



}
