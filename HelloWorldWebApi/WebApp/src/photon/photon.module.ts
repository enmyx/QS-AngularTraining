import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotonComponent } from './photon/photon.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [PhotonComponent, TemplateDrivenFormComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PhotonComponent
  ]
})
export class PhotonModule { }
