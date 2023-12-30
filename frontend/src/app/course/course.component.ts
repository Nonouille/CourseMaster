import {Component, OnInit} from '@angular/core';
import {Class} from "../app.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit{
  pickedClasses : Class[] = [];
  constructor(private http: HttpClient, private router : Router) {
  }
  ngOnInit() {
    this.http.get<Class[]>('/api/pickedClasses').subscribe(
      (data: Class[]) => {
        this.pickedClasses = data;
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
  }
}
