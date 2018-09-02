import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLocationComponent } from './my-location.component';

describe('MyLocationComponent', () => {
  let component: MyLocationComponent;
  let fixture: ComponentFixture<MyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
