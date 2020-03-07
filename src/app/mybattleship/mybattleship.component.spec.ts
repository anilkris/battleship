import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybattleshipComponent } from './mybattleship.component';

describe('MybattleshipComponent', () => {
  let component: MybattleshipComponent;
  let fixture: ComponentFixture<MybattleshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybattleshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybattleshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
