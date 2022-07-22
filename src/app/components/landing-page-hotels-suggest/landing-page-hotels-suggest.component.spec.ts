import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageHotelsSuggestComponent } from './landing-page-hotels-suggest.component';

describe('LandingPageHotelsSuggestComponent', () => {
  let component: LandingPageHotelsSuggestComponent;
  let fixture: ComponentFixture<LandingPageHotelsSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageHotelsSuggestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageHotelsSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
