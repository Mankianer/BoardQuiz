import { TestBed } from '@angular/core/testing';

import { Game2Service } from './game2.service';

describe('Game2Service', () => {
  let service: Game2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Game2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
