import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from "../environments/environment";
export let AppComponent = class AppComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.title = 'frontend';
        console.log(environment.production); // Logs false for development environment
    }
    onTestClick() {
        this.httpClient.get('/api/learning-package').subscribe(res => {
            console.log(res);
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
//# sourceMappingURL=app.component.js.map