import {Component, OnInit} from '@angular/core';
import {Class} from "../app.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-course-quizz',
  templateUrl: './course-quizz.component.html',
  styleUrls: ['./course-quizz.component.css']
})
export class CourseQuizzComponent implements OnInit{
  selectedClass : Class |undefined;
  selectedQuestion : number =1;
  isFlipped: boolean = false;

  // Method to toggle the card flip
  toggleCard(): void {
    this.isFlipped = !this.isFlipped;
  }
  constructor(private http : HttpClient) {
  }

  ngOnInit() {
    const url = window.location.href;
    const parts = url.split('/');
    const classId = parts[parts.length - 3];
    this.selectedQuestion = +parts[parts.length - 1];
    this.http.get<Class>(`/api/pickedClass/${classId}`).subscribe(
      (data: Class) => {
        this.selectedClass = data;
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  changeCoef(param:number){
    const classId = this.selectedClass?.id;
    const questionId = this.selectedQuestion;
    const body = {param : param};
    this.http.put(`/api/updateCoef/${classId}/question/${questionId}`,body).subscribe(
      (data: any) => {
        console.log(`Coef of question ${questionId} from class ${classId} modified`);
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    )
  }
}
