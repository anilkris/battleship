import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshipsComponent } from './myships.component';

describe('MyshipsComponent', () => {
  let component: MyshipsComponent;
  let fixture: ComponentFixture<MyshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
