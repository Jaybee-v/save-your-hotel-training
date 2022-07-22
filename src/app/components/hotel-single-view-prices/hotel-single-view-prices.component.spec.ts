import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSingleViewPricesComponent } from './hotel-single-view-prices.component';

describe('HotelSingleViewPricesComponent', () => {
  let component: HotelSingleViewPricesComponent;
  let fixture: ComponentFixture<HotelSingleViewPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSingleViewPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSingleViewPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
