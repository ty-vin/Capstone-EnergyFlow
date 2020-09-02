import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeartRoutingModule } from './heart-routing.module';
import { HeartCComponent } from './heart-c/heart-c.component';


@NgModule({
  declarations: [HeartCComponent],
  imports: [
    CommonModule,
    HeartRoutingModule
  ]
})
export class HeartModule { }
