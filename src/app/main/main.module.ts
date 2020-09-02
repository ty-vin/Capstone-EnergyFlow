import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainCComponent } from './main-c/main-c.component';


@NgModule({
  declarations: [MainCComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
