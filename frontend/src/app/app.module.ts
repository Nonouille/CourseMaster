import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { LessonSelectComponent } from './lesson-select/lesson-select.component';
import { CourseComponent } from './course/course.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { CourseEditDetailComponent } from './course-edit-detail/course-edit-detail.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonSelectComponent,
    CourseComponent,
    CourseEditComponent,
    StatistiquesComponent,
    CourseEditDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
