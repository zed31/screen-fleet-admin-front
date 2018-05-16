import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionCreatorComponent } from './composition-creator.component';

describe('CompositionCreatorComponent', () => {
  let component: CompositionCreatorComponent;
  let fixture: ComponentFixture<CompositionCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
