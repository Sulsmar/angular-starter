import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaRegisterFormComponent } from './swa-register-form.component';

describe('SwaRegisterFormComponent', () => {
  let component: SwaRegisterFormComponent;
  let fixture: ComponentFixture<SwaRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
