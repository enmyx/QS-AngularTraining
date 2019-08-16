import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsClient, Car } from 'api-client/api-client';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  car: Car;

  constructor(private route: ActivatedRoute, private carClient: CarsClient) {
    this.route.params.subscribe(r => {
      carClient.get(r.id).subscribe(c => this.car = c);
    });
  }

  ngOnInit() {
  }

  saveCar() {
    this.carClient.post(this.car).subscribe();
  }
}
