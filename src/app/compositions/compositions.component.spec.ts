import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionsComponent } from './compositions.component';

describe('CompositionsComponent', () => {
  let component: CompositionsComponent;
  let fixture: ComponentFixture<CompositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
