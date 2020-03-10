import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshipsComponent } from './myships.component';

fdescribe('MyshipsComponent', () => {
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
  it('should  create computer ships for : 0,0,1', () => {
  const destroyer =    component.updateComputerDestroyer(0, 0, 1);
  console.log(  JSON.stringify(destroyer));
  expect(JSON.stringify(destroyer)).toContain('A1', 'A2');
  });

  it('should  create computer ships for : 1,1,1', () => {
  const destroyer =    component.updateComputerDestroyer(1, 1, 1);
  console.log(  JSON.stringify(destroyer));
  });
  it('should  create computer ships for : 9,9,1', () => {
  const destroyer =    component.updateComputerDestroyer(9, 9, 1);
  console.log(  JSON.stringify(destroyer));
  });
  it('should  create computer ships for : 9,4,1', () => {
  const destroyer =    component.updateComputerDestroyer(9, 4, 1);
  console.log(  JSON.stringify(destroyer));
  });

  it('should  create computer ships for : 0,0,0', () => {
    const destroyer =    component.updateComputerDestroyer(0, 0, 0);
    console.log(  JSON.stringify(destroyer));
    expect(JSON.stringify(destroyer)).toContain('A1', 'B1');
    });

  it('should  create computer ships for : 1,1,0', () => {
    const destroyer =    component.updateComputerDestroyer(1, 1, 0);
    console.log(  JSON.stringify(destroyer));
    });
  it('should  create computer ships for : 9,9,0', () => {
    const destroyer =    component.updateComputerDestroyer(9, 9, 0);
    console.log(  JSON.stringify(destroyer));
    });
  it('should  create computer ships for : 9,4,0', () => {
    const destroyer =    component.updateComputerDestroyer(9, 4, 0);
    console.log(  JSON.stringify(destroyer));
    });


 it('should  create computer ships for : 9,0,0', () => {
  const destroyer =    component.updateComputerDestroyer(9, 0, 0);
  console.log(  JSON.stringify(destroyer));
  });

 it('should  create computer ships for : 0,9,0', () => {
  const destroyer =    component.updateComputerDestroyer(0, 9, 0);
  console.log(  JSON.stringify(destroyer));
  });


 it('should  create computer ships for : 9,0,1', () => {
  const destroyer =    component.updateComputerDestroyer(9, 0, 1);
  console.log(  JSON.stringify(destroyer));
  });
 it('should  create computer ships for : 0,9,1', () => {
  const destroyer =    component.updateComputerDestroyer(0, 9, 1);
  console.log(  JSON.stringify(destroyer));
  });






});
