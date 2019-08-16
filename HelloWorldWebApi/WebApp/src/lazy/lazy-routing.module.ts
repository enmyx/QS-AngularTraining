import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';
import { TomiComponent } from './tomi/tomi.component';


const routes: Routes = [
  { path: '', component: LazyComponent },
  { path: 'tomi', component: TomiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
