import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SacralRoutingModule } from './sacral-routing.module';
import { SacralCComponent } from './sacral-c/sacral-c.component';


@NgModule({
  declarations: [SacralCComponent],
  imports: [
    CommonModule,
    SacralRoutingModule
  ]
})
export class SacralModule { }
