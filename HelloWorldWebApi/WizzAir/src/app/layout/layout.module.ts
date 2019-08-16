import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { PlanComponent } from './plan/plan.component';
import { InformationComponent } from './information/information.component';
import {MenubarModule} from 'primeng/menubar';
import {NgbModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, PlanComponent, InformationComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenubarModule,
    NgbModule,
    NgbCarouselModule,
    SharedModule
  ]
})
export class LayoutModule { }
