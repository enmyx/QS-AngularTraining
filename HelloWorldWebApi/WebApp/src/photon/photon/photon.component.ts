import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CarsClient, Car } from 'api-client/api-client';


@Component({
  selector: 'app-photon',
  templateUrl: './photon.component.html',
  styleUrls: ['./photon.component.scss']
})
export class PhotonComponent implements OnInit {
  @Input() currentId: number;

  @Output() tibiEvent: EventEmitter<Car> = new EventEmitter();

  cars = [];
  constructor(private carClient: CarsClient) {
    carClient.getAll().subscribe(r => this.cars = r);
  }

  ngOnInit() {
  }

  refresh() {
    this.currentId = 4;
    this.tibiEvent.emit(this.cars[this.currentId]);
  }
}
