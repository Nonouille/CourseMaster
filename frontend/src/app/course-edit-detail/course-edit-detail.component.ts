import {Component, OnInit} from '@angular/core';
import {Class} from "../app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-course-edit-detail',
  templateUrl: './course-edit-detail.component.html',
  styleUrls: ['./course-edit-detail.component.css']
})
export class CourseEditDetailComponent implements OnInit{
  modifiedClass : Class |undefined ;
  constructor(private http : HttpClient) {
  }
  ngOnInit() {
    const url = window.location.href;
    const parts = url.split('/');
    const classId = parts[parts.length - 1];
    this.http.get<Class>(`/api/pickedClass/${classId}`).subscribe(
        (data: Class) => {
          this.modifiedClass = data;
        },
        (error: any) => {
          console.error('Error fetching classes:', error);
        }
    );
  }

  modifyClass(){
    if (this.modifiedClass && this.modifiedClass.chapters) {
      for (let chapter of this.modifiedClass.chapters) {
        const chapterID = chapter.chapterID;
        const newText = (document.getElementById(`chapterText${chapterID - 1}`) as HTMLInputElement).value;
        chapter.text = newText;
      }
    }
    const body = this.modifiedClass;
    this.http.put<Class>(`/api/modify-chapter/${this.modifiedClass?.id}`, body).subscribe(data => this.modifiedClass = data);
    window.location.reload();
  }
}
