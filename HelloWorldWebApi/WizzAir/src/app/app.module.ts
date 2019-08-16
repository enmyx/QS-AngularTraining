import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_BASE_URL } from 'api-client/api-client';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptorService } from './shared/interceptors/spinner-interceptor.service';
import { SharedModule } from './shared/shared.module';


export function getBaseUrl(): string {
  return ' ';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{ provide: API_BASE_URL, useFactory: getBaseUrl },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
