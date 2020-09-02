import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoCComponent } from './info-c/info-c.component';


@NgModule({
  declarations: [InfoCComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
