import { TestBed } from '@angular/core/testing';

import { DateByCountryService } from './date-by-country.service';

describe('DateByCountryService', () => {
  let service: DateByCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateByCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
