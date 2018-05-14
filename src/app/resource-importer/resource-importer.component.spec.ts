import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceImporterComponent } from './resource-importer.component';

describe('ResourceImporterComponent', () => {
  let component: ResourceImporterComponent;
  let fixture: ComponentFixture<ResourceImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceImporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
