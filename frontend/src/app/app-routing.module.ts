import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {CourseEditComponent} from "./course-edit/course-edit.component";
import {LessonSelectComponent} from "./lesson-select/lesson-select.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {CourseEditDetailComponent} from "./course-edit-detail/course-edit-detail.component";
import {CourseQuizzComponent} from "./course-quizz/course-quizz.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";

const routes: Routes = [
  { path : '', component : CourseComponent},
  { path : 'course/:id', component: CourseDetailComponent},
  { path : 'course/:classId/question/:questionId', component : CourseQuizzComponent},
  { path : 'course-edit' , component : CourseEditComponent},
  { path : 'course-edit-detail/:id', component : CourseEditDetailComponent},
  { path : 'lesson-select', component : LessonSelectComponent},
  { path : 'statistics', component : StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
