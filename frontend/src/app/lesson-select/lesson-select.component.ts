import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

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
  id: number | undefined = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.get<Class[]>('/api/availableClasses').subscribe(
      (data: Class[]) => {
        this.classesAvailable = data;
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  addToList(selectedClass: Class){
    const body = selectedClass;
    this.http.post<Class>('/api/add-to-personal', body).subscribe(
      (data) => {
        console.log('Successfully added to personal:', data);
        // Handle the response here if needed
      },
      (error) => {
        console.error('Error while adding to personal:', error);
        // Handle the error here if needed
      }
    );
  }

}
