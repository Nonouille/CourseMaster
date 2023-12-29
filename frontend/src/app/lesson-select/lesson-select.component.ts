import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Class} from "../app.component";

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
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
    this.http.get<Class[]>('/api/pickedClasses').subscribe(
      (data: Class[]) => {
        this.pickedClasses = data;
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
      this.http.post<Class>('/api/add-to-picked', body).subscribe(
        (data) => {
          console.log('Successfully added to personal:', data);
          window.location.reload();
        }
      );
  }

  removeFromPicked(id: number) {
    this.http.delete(`/api/remove-from-picked/${id}`).subscribe(
      (response) => {
        console.log('Response:', response);
      },
    );
  }

  protected readonly removeEventListener = removeEventListener;
}
