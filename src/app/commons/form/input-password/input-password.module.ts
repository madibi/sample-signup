import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { FieldErrorsModule } from '@commons/form/field-errors/field-errors.module';
import { IconModule } from '@commons/components/icon/icon.module';

@NgModule( {
	declarations: [ InputPasswordComponent ],
	exports: [
		InputPasswordComponent
	],
	imports: [
		CommonModule,
		FieldErrorsModule,
    IconModule
	]
})
export class InputPasswordModule { }
