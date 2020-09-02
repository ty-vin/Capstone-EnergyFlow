import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdeyeRoutingModule } from './thirdeye-routing.module';
import { ThirdeyeCComponent } from './thirdeye-c/thirdeye-c.component';


@NgModule({
  declarations: [ThirdeyeCComponent],
  imports: [
    CommonModule,
    ThirdeyeRoutingModule
  ]
})
export class ThirdeyeModule { }
