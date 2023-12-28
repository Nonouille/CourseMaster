import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Class {
  id?: number;
  title: string;
  description?: string;
  targetAudience?: string;
  difficulty?: number;
}
@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.component.html',
  styleUrls: ['./lesson-select.component.css']
})

export class LessonSelectComponent implements OnInit{
  classesAvailable : Class[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Class[]>('/api/classes').subscribe(
      (data: Class[]) => {
        this.classesAvailable = data;
        console.log(this.classesAvailable);
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

}
