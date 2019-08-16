import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotonComponent } from './photon.component';

describe('PhotonComponent', () => {
  let component: PhotonComponent;
  let fixture: ComponentFixture<PhotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
