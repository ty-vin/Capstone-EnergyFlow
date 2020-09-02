import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrownRoutingModule } from './crown-routing.module';
import { CrownCComponent } from './crown-c/crown-c.component';


@NgModule({
  declarations: [CrownCComponent],
  imports: [
    CommonModule,
    CrownRoutingModule
  ]
})
export class CrownModule { }
