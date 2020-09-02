import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootCComponent } from './root-c/root-c.component';


@NgModule({
  declarations: [RootCComponent],
  imports: [
    CommonModule,
    RootRoutingModule
  ]
})
export class RootModule { }
