import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytargetsComponent } from './mytargets.component';

describe('MytargetsComponent', () => {
  let component: MytargetsComponent;
  let fixture: ComponentFixture<MytargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
