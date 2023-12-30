import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuizzComponent } from './course-quizz.component';

describe('CourseQuizzComponent', () => {
  let component: CourseQuizzComponent;
  let fixture: ComponentFixture<CourseQuizzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseQuizzComponent]
    });
    fixture = TestBed.createComponent(CourseQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
