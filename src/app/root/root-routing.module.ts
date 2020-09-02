import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootCComponent } from './root-c/root-c.component';


const routes: Routes = [

  { path: '', component: RootCComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
