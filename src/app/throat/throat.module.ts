import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThroatRoutingModule } from './throat-routing.module';
import { ThroatCComponent } from './throat-c/throat-c.component';


@NgModule({
  declarations: [ThroatCComponent],
  imports: [
    CommonModule,
    ThroatRoutingModule
  ]
})
export class ThroatModule { }
