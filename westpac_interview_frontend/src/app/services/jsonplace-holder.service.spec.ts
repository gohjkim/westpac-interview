import { TestBed } from '@angular/core/testing';

import { JSONPlaceHolderService } from './jsonplace-holder.service';

describe('JSONPlaceHolderService', () => {
  let service: JSONPlaceHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONPlaceHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
