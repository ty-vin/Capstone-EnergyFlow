import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolarRoutingModule } from './solar-routing.module';
import { SolarCComponent } from './solar-c/solar-c.component';


@NgModule({
  declarations: [SolarCComponent],
  imports: [
    CommonModule,
    SolarRoutingModule
  ]
})
export class SolarModule { }
