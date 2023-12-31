import {Component, OnInit} from '@angular/core';
import {Class} from "../app.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-quizz',
  templateUrl: './course-quizz.component.html',
  styleUrls: ['./course-quizz.component.css'],

})
export class CourseQuizzComponent implements OnInit{
  selectedClass : Class | undefined;
  selectedQuestion : number =1;
  isFlipped: boolean = false;


  // Method to toggle the card flip
  toggleCard(): void {
    this.isFlipped = !this.isFlipped;
  }

  constructor(private http : HttpClient, private router : Router,private route: ActivatedRoute) {

  }
  ngOnInit() {
    console.log('Starting quizz')
    this.route.params.subscribe(params => {
      const classId = +params['classId'];
      this.selectedQuestion = +params['questionId'];
      this.http.get<Class>(`/api/pickedClass/${classId}`).subscribe(
        (data: Class) => {
          this.selectedClass = data;
        },
        (error: any) => {
          console.error(`Error fetching class with ID ${classId}`, error);
        }
      );
    });

  }

  changeCoef(param:number){
    const classId = this.selectedClass?.id;
    const questionId = this.selectedQuestion;
    const body = {param : param};
    const lastIndex = (this.selectedClass?.questions.length ?? 0) - 1;
    this.http.put(`/api/updateCoef/${classId}/question/${questionId}`,body).subscribe(
      (data: any) => {
        console.log(`Coef of question ${questionId} from class ${classId} modified`);
        if(questionId === lastIndex)
        {
          window.alert("Lesson finished ! \nWell done !");
          this.router.navigate([`/course/${classId}`]);
        }
        else {
          this.isFlipped = false;
          this.router.navigate([`/course/${classId}/question/${questionId + 1}`]);
        }
      },
      (error: any) => {
        console.error('Error fetching classes:', error);
      }
    )

  }
}
