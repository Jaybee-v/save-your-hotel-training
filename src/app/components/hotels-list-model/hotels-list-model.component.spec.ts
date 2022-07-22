import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsListModelComponent } from './hotels-list-model.component';

describe('HotelsListModelComponent', () => {
  let component: HotelsListModelComponent;
  let fixture: ComponentFixture<HotelsListModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsListModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
