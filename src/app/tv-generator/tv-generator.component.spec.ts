import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvGeneratorComponent } from './tv-generator.component';

describe('TvGeneratorComponent', () => {
  let component: TvGeneratorComponent;
  let fixture: ComponentFixture<TvGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
