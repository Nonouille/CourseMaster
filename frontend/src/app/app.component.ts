import { Component } from '@angular/core';
import { environment} from "../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";

export interface Class {
  id: number;
  title: string;
  author: string;
  platform: string;
  description?: string;
  difficulty?: number;
  chapters? : [
    {
      chapterID : number;
      text : string;
    }
  ]
  questions? : [
    {
      question? : string;
      answer? : string;
      learnedCoef?: number;
    }
  ]
}

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
