import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardComponentGame2 } from './scoreboard-component-game2.component';

describe('ScoreboardComponent', () => {
  let component: ScoreboardComponentGame2;
  let fixture: ComponentFixture<ScoreboardComponentGame2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardComponentGame2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardComponentGame2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
