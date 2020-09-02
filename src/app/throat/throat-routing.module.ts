import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThroatCComponent } from './throat-c/throat-c.component';


const routes: Routes = [

  { path: '', component: ThroatCComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThroatRoutingModule { }
