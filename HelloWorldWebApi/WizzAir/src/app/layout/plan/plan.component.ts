import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  pages = [
    {
      title: 'First page',
      detail: 'Lorem ipsum.',
      image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
      imageAlt: 'kutya'
    },
    {
      title: 'Second page',
      detail: 'Some random words.',
      image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
      imageAlt: 'cica'
    },
    {
      title: 'Third page',
      detail: 'I have no idea what should I write here.',
      image: `https://picsum.photos/900/500?random&t=${Math.random()}`,
      imageAlt: 'mérési hiba'
    }
  ];

  destination: string;
  chekinDate: Date;
  chekoutDate: Date;

  constructor() { }

  ngOnInit() {
  }

  imageLoaded() {
  }
}
