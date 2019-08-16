import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomiComponent } from './tomi.component';

describe('TomiComponent', () => {
  let component: TomiComponent;
  let fixture: ComponentFixture<TomiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
