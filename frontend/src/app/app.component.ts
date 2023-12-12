import { Component } from '@angular/core';
import { environment} from "../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private httpClient: HttpClient) {
    console.log(environment.production); // Logs false for development environment
  }

  onTestClick() {
    this.httpClient.get('/api/learning-package').subscribe(res => {
      console.log(res)
    })
  }
}
