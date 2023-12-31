import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { LessonSelectComponent } from './lesson-select/lesson-select.component';
import { CourseComponent } from './course/course.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseEditDetailComponent } from './course-edit-detail/course-edit-detail.component';
import { CourseQuizzComponent } from './course-quizz/course-quizz.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LessonSelectComponent,
    CourseComponent,
    CourseEditComponent,
    StatisticsComponent,
    CourseEditDetailComponent,
    CourseQuizzComponent,
    CourseDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
