import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidCourseComponent } from './paid-course.component';

describe('PaidCourseComponent', () => {
  let component: PaidCourseComponent;
  let fixture: ComponentFixture<PaidCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
