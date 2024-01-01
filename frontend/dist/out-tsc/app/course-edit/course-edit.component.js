import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let CourseEditComponent = class CourseEditComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.pickedClasses = [];
    }
    ngOnInit() {
        this.http.get('/api/pickedClasses').subscribe((data) => {
            this.pickedClasses = data;
            console.log(this.pickedClasses);
        }, (error) => {
            console.error('Error fetching classes:', error);
        });
    }
    modifyClass(id) {
        this.router.navigate([`/course-edit-detail/${id}`]);
    }
};
CourseEditComponent = __decorate([
    Component({
        selector: 'app-course-edit',
        templateUrl: './course-edit.component.html',
        styleUrls: ['./course-edit.component.css']
    })
], CourseEditComponent);
//# sourceMappingURL=course-edit.component.js.map