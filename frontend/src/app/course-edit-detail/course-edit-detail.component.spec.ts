import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditDetailComponent } from './course-edit-detail.component';

describe('CourseEditDetailComponent', () => {
  let component: CourseEditDetailComponent;
  let fixture: ComponentFixture<CourseEditDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseEditDetailComponent]
    });
    fixture = TestBed.createComponent(CourseEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
