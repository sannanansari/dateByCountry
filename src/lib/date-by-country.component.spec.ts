import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateByCountryComponent } from './date-by-country.component';

describe('DateByCountryComponent', () => {
  let component: DateByCountryComponent;
  let fixture: ComponentFixture<DateByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateByCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
