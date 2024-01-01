import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let LessonSelectComponent = class LessonSelectComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.classesAvailable = [];
        this.pickedClasses = [];
        this.removeEventListener = removeEventListener;
    }
    ngOnInit() {
        this.http.get('/api/availableClasses').subscribe((data) => {
            this.classesAvailable = data;
        }, (error) => {
            console.error('Error fetching classes:', error);
        });
        this.http.get('/api/pickedClasses').subscribe((data) => {
            this.pickedClasses = data;
        }, (error) => {
            console.error('Error fetching classes:', error);
        });
    }
    // Add a function to check if a class is present in pickedClasses
    classIsPicked(singleClass) {
        return this.pickedClasses.some((pickedClass) => pickedClass.id === singleClass.id);
    }
    // Function to add/remove class from pickedClasses
    addToPicked(selectedClass) {
        const body = selectedClass;
        console.log(`index to add ${selectedClass.id}`);
        this.http.post('/api/add-to-picked', body).subscribe((data) => {
            console.log('Successfully added to personal:', data);
            window.location.reload();
        });
    }
    removeFromPicked(id) {
        this.http.delete(`/api/remove-from-picked/${id}`).subscribe((response) => {
            console.log('Response:', response);
            window.location.reload();
        });
    }
};
LessonSelectComponent = __decorate([
    Component({
        selector: 'app-lesson-select',
        templateUrl: './lesson-select.component.html',
        styleUrls: ['./lesson-select.component.css']
    })
], LessonSelectComponent);
//# sourceMappingURL=lesson-select.component.js.map