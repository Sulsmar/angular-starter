import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaRegisterPageComponent } from './swa-register-page.component';

describe('SwaRegisterPageComponent', () => {
  let component: SwaRegisterPageComponent;
  let fixture: ComponentFixture<SwaRegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaRegisterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
