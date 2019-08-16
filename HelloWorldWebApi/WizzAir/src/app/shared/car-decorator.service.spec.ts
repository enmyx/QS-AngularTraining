import { TestBed } from '@angular/core/testing';

import { CarDecoratorService } from './car-decorator.service';

describe('CarDecoratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarDecoratorService = TestBed.get(CarDecoratorService);
    expect(service).toBeTruthy();
  });
});
