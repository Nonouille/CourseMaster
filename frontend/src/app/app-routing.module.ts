import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {CourseEditComponent} from "./course-edit/course-edit.component";
import {LessonSelectComponent} from "./lesson-select/lesson-select.component";
import {StatistiquesComponent} from "./statistiques/statistiques.component";
import {CourseEditDetailComponent} from "./course-edit-detail/course-edit-detail.component";
import {CourseQuizzComponent} from "./course-quizz/course-quizz.component";

const routes: Routes = [
  { path : 'courses', component : CourseComponent},
  { path : 'course-edit' , component : CourseEditComponent},
  { path : 'course-edit-detail/:id', component : CourseEditDetailComponent},
  { path : 'lesson-select', component : LessonSelectComponent},
  { path : 'statistiques', component : StatistiquesComponent},
  { path : 'course/:id/question/:id', component : CourseQuizzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
