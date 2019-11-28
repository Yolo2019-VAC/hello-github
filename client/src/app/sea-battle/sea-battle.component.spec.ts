import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaBattleComponent } from './sea-battle.component';

describe('SeaBattleComponent', () => {
  let component: SeaBattleComponent;
  let fixture: ComponentFixture<SeaBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
