import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolarCComponent } from './solar-c/solar-c.component';

const routes: Routes = [

  { path: '', component: SolarCComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolarRoutingModule { }
