import { Component, OnInit } from '@angular/core';
import {Class} from "../app.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit{
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

  modifyClass(id:number){
    this.router.navigate([`/course-edit-detail/${id}`]);
  }
}
