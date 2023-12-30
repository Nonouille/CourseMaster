import { Component, OnInit } from '@angular/core';
import {Class} from './../app.component';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
  selectedClass:Class|undefined;
  constructor(private http : HttpClient, private router : Router) {
  }
  ngOnInit() {
    const url = window.location.href;
    const parts = url.split('/');
    const classId = parts[parts.length - 1];
    this.http.get<Class>(`/api/pickedClass/${classId}`).subscribe(
      (data: Class) => {
        this.selectedClass = data;
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  goToQuizz(){
    this.router.navigate([`/course/${this.selectedClass?.id}/question/1`])
  }
}
