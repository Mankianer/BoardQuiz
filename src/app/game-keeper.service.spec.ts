import { TestBed } from '@angular/core/testing';

import { GameKeeperService } from './game-keeper.service';

describe('GameKeeperService', () => {
  let service: GameKeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameKeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
