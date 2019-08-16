import { Injectable } from '@angular/core';
import { SpinnerService as SpinnerService } from '../services/spinner.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService {

  constructor(private spinnerService: SpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next.handle(request).pipe(finalize(() => {
      this.spinnerService.hide();
    }));
  }
}
