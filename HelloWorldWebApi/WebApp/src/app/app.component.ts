import { Component, ViewChild } from '@angular/core';
import { PhotonComponent } from 'src/photon/photon/photon.component';
import { Car } from 'api-client/api-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('myPhoton', { static: true}) photon: PhotonComponent;

  idParam = 3;
  title = 'WebApp';

  refreshPhoton() {
    this.photon.refresh();
  }

  tibiHandler(car: Car) {
    alert(car.brand);
  }
}
