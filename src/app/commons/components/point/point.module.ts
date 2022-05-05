import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointComponent } from './point.component';
import {IconModule} from "@commons/components/icon/icon.module";

@NgModule({
  declarations: [
    PointComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    PointComponent
  ],
})
export class PointModule { }
