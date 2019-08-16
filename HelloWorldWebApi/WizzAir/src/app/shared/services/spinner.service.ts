import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerSource = new Subject<boolean>();
  private spinnerCount = 0;
  private timer: any = null;

  spinnerObserver = this.spinnerSource.asObservable();

  show(): void {
    this.spinnerCount++;
    if (this.timer == null) {
      this.timer = setTimeout(() => {
        if (this.spinnerCount > 0) {
          this.spinnerSource.next(true);
        }
        this.timer = null;
      }, 500);
    }

  }

  hide(): void {
    if (this.spinnerCount > 0) {
      this.spinnerCount--;
    }
    if (this.spinnerCount <= 0) {
      if (this.timer != null) {
        clearTimeout(this.timer);
      }
      this.timer = null;
      this.spinnerSource.next(false);
    }
  }
}
