import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let CourseEditDetailComponent = class CourseEditDetailComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const url = window.location.href;
        const parts = url.split('/');
        const classId = parts[parts.length - 1];
        this.http.get(`/api/pickedClass/${classId}`).subscribe((data) => {
            this.modifiedClass = data;
        }, (error) => {
            console.error('Error fetching classes:', error);
        });
    }
    modifyClass() {
        if (this.modifiedClass && this.modifiedClass.chapters) {
            for (let chapter of this.modifiedClass.chapters) {
                const chapterID = chapter.chapterID;
                const newText = document.getElementById(`chapterText${chapterID - 1}`).value;
                chapter.text = newText;
            }
        }
        const body = this.modifiedClass;
        this.http.put(`/api/modify-chapter/${this.modifiedClass?.id}`, body).subscribe(data => this.modifiedClass = data);
        window.location.reload();
    }
};
CourseEditDetailComponent = __decorate([
    Component({
        selector: 'app-course-edit-detail',
        templateUrl: './course-edit-detail.component.html',
        styleUrls: ['./course-edit-detail.component.css']
    })
], CourseEditDetailComponent);
//# sourceMappingURL=course-edit-detail.component.js.map