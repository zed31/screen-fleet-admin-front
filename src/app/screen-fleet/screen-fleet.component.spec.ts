import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFleetComponent } from './screen-fleet.component';

describe('ScreenFleetComponent', () => {
  let component: ScreenFleetComponent;
  let fixture: ComponentFixture<ScreenFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
