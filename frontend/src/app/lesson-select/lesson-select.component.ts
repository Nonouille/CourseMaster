import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

export interface Class {
  id: number;
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
  classesAvailable : Class[] = [];
  pickedClasses : Class[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.get<Class[]>('/api/availableClasses').subscribe(
      (data: Class[]) => {
        this.classesAvailable = data;
        console.log(`Classes available : ${this.classesAvailable}`);
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
    this.http.get<Class[]>('/api/pickedClasses').subscribe(
      (data: Class[]) => {
        this.pickedClasses = data;
        console.log(`Picked Classes : ${this.pickedClasses}`);
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  // Add a function to check if a class is present in pickedClasses
  classIsPicked(singleClass: Class): boolean {
    return this.pickedClasses.some((pickedClass: Class) => pickedClass.id === singleClass.id);
  }

  // Function to add/remove class from pickedClasses
  addToPicked(selectedClass: Class){
    const body = selectedClass;
      console.log(`index to add ${selectedClass.id}`)
      this.http.post<Class>('/api/add-to-personal', body).subscribe(
        (data) => {
          console.log('Successfully added to personal:', data);
          window.location.reload();
        }
      );
  }

  removeFromPicked(id: number) {
    this.http.delete(`/api/remove-from-personal/${id}`).subscribe(
      (response) => {
        console.log('Response:', response);
      },
    );
  }

  protected readonly removeEventListener = removeEventListener;
}
