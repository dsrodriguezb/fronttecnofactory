import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotOk500Component } from './not-ok500.component';

describe('NotOk500Component', () => {
  let component: NotOk500Component;
  let fixture: ComponentFixture<NotOk500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotOk500Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotOk500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
