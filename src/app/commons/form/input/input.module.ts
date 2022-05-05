import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FieldErrorsModule } from '../field-errors/field-errors.module';
import {IconModule} from "@commons/components/icon/icon.module";



@NgModule( {
	declarations: [ InputComponent ],
	exports: [
		InputComponent
	],
    imports: [
        CommonModule,
        FieldErrorsModule,
        IconModule
    ]
})
export class InputModule { }
