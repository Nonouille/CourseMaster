import { Component, OnInit } from '@angular/core';
import { Class } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  pickedClasses: Class[] = [];
  slideIndex = 0;

  constructor(private http: HttpClient, private router: Router) { }

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

  plusSlides(n: number) {
    this.slideIndex += n;
    this.showSlides();
  }

  currentSlide(index: number) {
    this.slideIndex = index;
    this.showSlides();
  }

  showSlides() {
    const slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

    if (this.slideIndex >= slides.length) { this.slideIndex = 0; }
    if (this.slideIndex < 0) { this.slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].classList.remove('active');
    }

    slides[this.slideIndex].style.display = 'block';
    dots[this.slideIndex].classList.add('active');
  }

  goToQuizz(id:number){
    this.router.navigate([`/course/${id}/question/1`]);
  }
}
