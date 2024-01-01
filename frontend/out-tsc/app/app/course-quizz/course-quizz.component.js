import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BehaviorSubject } from "rxjs";
export let CourseQuizzComponent = class CourseQuizzComponent {
    // Method to toggle the card flip
    toggleCard() {
        this.isFlipped = !this.isFlipped;
    }
    onViewCard() {
        this.incrementCardsViewedCount();
    }
    onUnderstoodCard() {
        this.incrementCardsUnderstoodCount();
    }
    onNotUnderstoodCard() {
        this.incrementCardsNotUnderstoodCount();
    }
    onUnderstandingCard() {
        this.incrementCardsUnderstandingdCount();
    }
    incrementCardsUnderstoodCount() {
        this.http.put('/api/incrementcardsUnderstoodCount', {}).subscribe(data => {
            const count = data.cardsUnderstoodCount;
            this.cardsUnderstoodCount.next(count);
        });
    }
    incrementCardsNotUnderstoodCount() {
        this.http.put('/api/incrementcardsNotUnderstoodCount', {}).subscribe(data => {
            const count = data.cardsNotUnderstoodCount;
            this.cardsNotUnderstoodCount.next(count);
        });
    }
    incrementCardsUnderstandingdCount() {
        this.http.put('/api/incrementcardsUnderstandingCount', {}).subscribe(data => {
            const count = data.cardsUnderstandingCount;
            this.cardsUnderstandingCount.next(count);
        });
    }
    incrementCardsViewedCount() {
        this.http.put('/api/incrementCardsViewedCount', {}).subscribe(data => {
            const count = data.cardsViewedCount;
            this.cardsViewedCount.next(count);
        });
    }
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.selectedQuestion = 1;
        this.isFlipped = false;
        this.cardsViewedCount = new BehaviorSubject(0);
        this.cardsUnderstoodCount = new BehaviorSubject(0);
        this.cardsNotUnderstoodCount = new BehaviorSubject(0);
        this.cardsUnderstandingCount = new BehaviorSubject(0);
    }
    ngOnInit() {
        console.log('Starting quizz');
        this.route.params.subscribe(params => {
            const classId = +params['classId'];
            this.selectedQuestion = +params['questionId'];
            this.http.get(`/api/pickedClass/${classId}`).subscribe((data) => {
                this.selectedClass = data;
            }, (error) => {
                console.error(`Error fetching class with ID ${classId}`, error);
            });
        });
    }
    changeCoef(param) {
        if (param == 0) {
            this.onNotUnderstoodCard();
        }
        if (param == 1) {
            this.onUnderstandingCard();
        }
        if (param == 2) {
            this.onUnderstoodCard();
        }
        const classId = this.selectedClass?.id;
        const questionId = this.selectedQuestion;
        const body = { param: param };
        const lastIndex = (this.selectedClass?.questions.length ?? 0) - 1;
        this.http.put(`/api/updateCoef/${classId}/question/${questionId}`, body).subscribe((data) => {
            console.log(`Coef of question ${questionId} from class ${classId} modified`);
            if (questionId === lastIndex) {
                window.alert("Lesson finished ! \nWell done !");
                this.router.navigate([`/course/${classId}`]);
            }
            else {
                this.isFlipped = false;
                this.router.navigate([`/course/${classId}/question/${questionId + 1}`]);
            }
        }, (error) => {
            console.error('Error fetching classes:', error);
        });
        this.onViewCard();
    }
};
CourseQuizzComponent = __decorate([
    Component({
        selector: 'app-course-quizz',
        templateUrl: './course-quizz.component.html',
        styleUrls: ['./course-quizz.component.css'],
    })
], CourseQuizzComponent);
//# sourceMappingURL=course-quizz.component.js.map