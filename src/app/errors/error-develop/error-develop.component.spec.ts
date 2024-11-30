import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDevelopComponent } from './error-develop.component';

describe('ErrorDevelopComponent', () => {
  let component: ErrorDevelopComponent;
  let fixture: ComponentFixture<ErrorDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorDevelopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
