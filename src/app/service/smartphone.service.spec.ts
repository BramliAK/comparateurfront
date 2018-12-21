import { TestBed, inject } from '@angular/core/testing';

import { SmartphoneService } from './smartphone.service';

describe('SmartphoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartphoneService]
    });
  });

  it('should be created', inject([SmartphoneService], (service: SmartphoneService) => {
    expect(service).toBeTruthy();
  }));
});
