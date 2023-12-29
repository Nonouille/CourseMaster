import {Component, OnInit} from '@angular/core';
import {Class} from "../app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-course-edit-detail',
  templateUrl: './course-edit-detail.component.html',
  styleUrls: ['./course-edit-detail.component.css']
})
export class CourseEditDetailComponent implements OnInit{
  modifiedClass : Class | undefined ;
  constructor(private http : HttpClient) {
  }
  ngOnInit() {
    const url = window.location.href;
    const parts = url.split('/');
    const classId = parts[parts.length - 1];
    this.http.get<Class>(`/api/pickedClass/${classId}`).subscribe(
        (data: Class) => {
          this.modifiedClass = data;
        },
        (error: any) => {
          console.error('Error fetching classes:', error);
        }
    );
  }
}
