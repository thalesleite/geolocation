import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLocationComponent } from './host-location.component';

describe('HostLocationComponent', () => {
  let component: HostLocationComponent;
  let fixture: ComponentFixture<HostLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
