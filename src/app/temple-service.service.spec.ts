import { TestBed } from '@angular/core/testing';

import { TempleServiceService } from './temple-service.service';

describe('TempleServiceService', () => {
  let service: TempleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
