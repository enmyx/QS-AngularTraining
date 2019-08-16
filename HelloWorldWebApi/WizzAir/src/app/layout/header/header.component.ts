import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Plan',
      routerLink: 'plan',
      icon: 'pi pi-compass'
    },
    {
      label: 'Info',
      routerLink: 'information',
      icon: 'pi pi-info'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
