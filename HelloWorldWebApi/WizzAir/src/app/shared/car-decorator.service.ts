import { Injectable } from '@angular/core';
import { Car } from 'api-client/api-client';

@Injectable({
  providedIn: 'root'
})
export class CarDecoratorService {

  constructor() { }

  decorate(car: Car) {
    car.brand += ' Car';
    return car;
  }
}
