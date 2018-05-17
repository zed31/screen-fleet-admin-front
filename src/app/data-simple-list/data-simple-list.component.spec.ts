import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSimpleListComponent } from './data-simple-list.component';

describe('DataSimpleListComponent', () => {
  let component: DataSimpleListComponent;
  let fixture: ComponentFixture<DataSimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSimpleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
