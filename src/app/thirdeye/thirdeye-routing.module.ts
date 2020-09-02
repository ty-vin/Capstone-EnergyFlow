import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdeyeCComponent } from './thirdeye-c/thirdeye-c.component';



const routes: Routes = [

  { path: '', component: ThirdeyeCComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdeyeRoutingModule { }
