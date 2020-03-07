import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragItComponent } from './drag-it.component';

describe('DragItComponent', () => {
  let component: DragItComponent;
  let fixture: ComponentFixture<DragItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
