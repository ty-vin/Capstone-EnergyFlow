import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCComponent } from './info-c/info-c.component';


const routes: Routes = [

  { path: '', component: InfoCComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
