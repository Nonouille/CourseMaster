import {Component, OnInit} from '@angular/core';
import {Class} from "../app.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
@Component({
  selector: 'app-course-quizz',
  templateUrl: './course-quizz.component.html',
  styleUrls: ['./course-quizz.component.css'],

})
export class CourseQuizzComponent implements OnInit{
  selectedClass : Class | undefined;
  selectedQuestion : number =1;
  isFlipped: boolean = false;
  cardsViewedCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cardsUnderstoodCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cardsNotUnderstoodCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cardsUnderstandingCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  // Method to toggle the card flip
  toggleCard(): void {
    this.isFlipped = !this.isFlipped;
  }
  onViewCard(): void {
    this.incrementCardsViewedCount()
  }
  onUnderstoodCard(): void {
    this.incrementCardsUnderstoodCount()
  }
  onNotUnderstoodCard(): void {
    this.incrementCardsNotUnderstoodCount()
  }
  onUnderstandingCard(): void {
    this.incrementCardsUnderstandingdCount()
  }
  incrementCardsUnderstoodCount(): void {
    this.http.put<{ cardsUnderstoodCount: number }>('/api/incrementcardsUnderstoodCount', {}).subscribe(data => {
      const count = data.cardsUnderstoodCount;
      this.cardsUnderstoodCount.next(count);
    });
  }
  incrementCardsNotUnderstoodCount(): void {
    this.http.put<{ cardsNotUnderstoodCount: number }>('/api/incrementcardsNotUnderstoodCount', {}).subscribe(data => {
      const count = data.cardsNotUnderstoodCount;
      this.cardsNotUnderstoodCount.next(count);
    });
  }
  incrementCardsUnderstandingdCount(): void {
    this.http.put<{ cardsUnderstandingCount: number }>('/api/incrementcardsUnderstandingCount', {}).subscribe(data => {
      const count = data.cardsUnderstandingCount;
      this.cardsUnderstandingCount.next(count);
    });
  }
  incrementCardsViewedCount(): void {
    this.http.put<{ cardsViewedCount: number }>('/api/incrementCardsViewedCount', {}).subscribe(data => {
      const count = data.cardsViewedCount;
      this.cardsViewedCount.next(count);
    });
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
    if (param==0){
      this.onNotUnderstoodCard()
    }
    if (param==1){
      this.onUnderstandingCard()
    }
    if (param==2){
      this.onUnderstoodCard()
    }
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

    this.onViewCard();

  }
}
