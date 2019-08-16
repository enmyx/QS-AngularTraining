import { Component, OnInit } from '@angular/core';
import { CarsClient, Car } from 'api-client/api-client';
import { CarDecoratorService } from 'src/app/shared/car-decorator.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  cars: Car[];
  cols: any[];

  constructor(private carsClient: CarsClient, carDecorator: CarDecoratorService) {
    carsClient.getAll().subscribe(c => {
      this.cars = c;
      this.cars.forEach(cd => carDecorator.decorate(cd));
    });
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'brand', header: 'Brand' },
      { field: 'manufactured', header: 'Year' },
    ];
  }

  onRowEditSave() {
    this.carsClient.post(this.cars[0]).subscribe();
  }
}
