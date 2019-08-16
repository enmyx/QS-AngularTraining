import { Component } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WizzAir';
  showSpinner = false;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.spinnerObserver.subscribe(r => this.showSpinner = r);
  }
}
