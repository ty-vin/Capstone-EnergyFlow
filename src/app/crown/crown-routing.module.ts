import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrownCComponent } from './crown-c/crown-c.component';


const routes: Routes = [

  { path: '', component: CrownCComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrownRoutingModule { }
