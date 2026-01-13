import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLive } from './game-live';

describe('GameLive', () => {
  let component: GameLive;
  let fixture: ComponentFixture<GameLive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameLive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
