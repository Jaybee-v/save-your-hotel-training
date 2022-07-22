import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageMidComponent } from './landing-page-mid.component';

describe('LandingPageMidComponent', () => {
  let component: LandingPageMidComponent;
  let fixture: ComponentFixture<LandingPageMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageMidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
