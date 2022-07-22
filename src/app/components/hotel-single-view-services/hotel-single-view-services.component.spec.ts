import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSingleViewServicesComponent } from './hotel-single-view-services.component';

describe('HotelSingleViewServicesComponent', () => {
  let component: HotelSingleViewServicesComponent;
  let fixture: ComponentFixture<HotelSingleViewServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSingleViewServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSingleViewServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
