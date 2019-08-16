import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotonComponent } from 'src/photon/photon/photon.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { TemplateDrivenFormComponent } from 'src/photon/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from 'src/photon/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'photon', component: PhotonComponent, children: [{ path: 'children', component: FirstChildComponent }] },
  { path: 'templateDriven/:id', component: TemplateDrivenFormComponent },
  { path: 'reactive/:id', component: ReactiveFormComponent },
  {
    path: 'lazy',
    loadChildren: () => import('../lazy/lazy.module').then(mod => mod.LazyModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
