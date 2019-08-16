import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotonModule } from 'src/photon/photon.module';
import { FirstChildComponent } from './first-child/first-child.component';
import { API_BASE_URL } from 'api-client/api-client';
import { environment } from 'src/environments/environment';
import { SharedModule } from 'src/shared/shared.module';

export function getBaseUrl(): string {
  return environment.baseUrl;
}

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotonModule,
    SharedModule
  ],
  providers: [{ provide: API_BASE_URL, useFactory: getBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
