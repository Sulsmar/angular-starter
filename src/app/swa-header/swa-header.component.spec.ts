import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaHeaderComponent } from './swa-header.component';

describe('SwaHeaderComponent', () => {
  let component: SwaHeaderComponent;
  let fixture: ComponentFixture<SwaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
