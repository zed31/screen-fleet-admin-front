import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionImporterComponent } from './composition-importer.component';

describe('CompositionImporterComponent', () => {
  let component: CompositionImporterComponent;
  let fixture: ComponentFixture<CompositionImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionImporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
