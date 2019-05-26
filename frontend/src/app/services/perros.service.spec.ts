import { TestBed } from '@angular/core/testing';

import { PerrosService } from './perros.service';

describe('PerrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerrosService = TestBed.get(PerrosService);
    expect(service).toBeTruthy();
  });
});
