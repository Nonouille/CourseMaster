import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let CourseComponent = class CourseComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.pickedClasses = [];
        this.slideIndex = 0;
    }
    ngOnInit() {
        this.http.get('/api/pickedClasses').subscribe((data) => {
            this.pickedClasses = data;
        }, (error) => {
            console.error('Error fetching classes:', error);
        });
    }
    plusSlides(n) {
        this.slideIndex += n;
        this.showSlides();
    }
    currentSlide(index) {
        this.slideIndex = index;
        this.showSlides();
    }
    showSlides() {
        const slides = document.getElementsByClassName('slide');
        const dots = document.getElementsByClassName('dot');
        if (this.slideIndex >= slides.length) {
            this.slideIndex = 0;
        }
        if (this.slideIndex < 0) {
            this.slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            dots[i].classList.remove('active');
        }
        slides[this.slideIndex].style.display = 'block';
        dots[this.slideIndex].classList.add('active');
    }
    goToCourse(id) {
        this.router.navigate([`/course/${id}`]);
    }
};
CourseComponent = __decorate([
    Component({
        selector: 'app-course',
        templateUrl: './course.component.html',
        styleUrls: ['./course.component.css']
    })
], CourseComponent);
//# sourceMappingURL=course.component.js.map