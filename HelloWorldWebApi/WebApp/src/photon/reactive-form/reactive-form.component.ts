import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Car, CarsClient } from 'api-client/api-client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  car: Car;

  carForm = this.fb.group({
    id: ['', Validators.required],
    brand: ['', Validators.compose([
      Validators.required,
      Validators.minLength(20)
    ])],
    manufactured: ['']
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private carClient: CarsClient) {
    this.route.params.subscribe(r => {
      carClient.get(r.id).subscribe(c => {
        this.car = c;
        this.carForm.patchValue({
          id: c.id,
          brand: c.brand,
          manufactured: c.manufactured
        });
      });
    });
  }

  ngOnInit() {
  }

}
