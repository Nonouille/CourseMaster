import { Component, OnInit,OnDestroy, ChangeDetectorRef } from '@angular/core';
import {BehaviorSubject,Observable, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: []
})
export class StatisticsComponent implements OnInit,OnDestroy {
  cardsViewedCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cardsUnderstoodCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cardsUnderstandingCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cardsNotUnderstoodCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient,) {
    this.fetchCardsViewedCount();
    this.fetchCardsNotUnderstoodCount();
    this.fetchCardsUnderstandingCount();
    this.fetchCardsUnderstoodCount();
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  fetchCardsViewedCount(): void {
    this.http.get<{ cardsViewedCount: number }>('/api/cardsViewedCount').subscribe(data => {
      this.cardsViewedCount.next(data.cardsViewedCount);
    });
  }
  fetchCardsUnderstoodCount(): void{
    this.http.get<{ cardsUnderstoodCount: number }>('/api/cardsUnderstoodCount').subscribe(data => {
      this.cardsUnderstoodCount.next(data.cardsUnderstoodCount);
    });
  }


  fetchCardsUnderstandingCount(): void {
    this.http.get<{ cardsUnderstandingCount: number }>('/api/cardsUnderstandingCount').subscribe(data => {
      this.cardsUnderstandingCount.next(data.cardsUnderstandingCount);
    });
  }

  getPercentage(understoodCount: number, viewedCount: number): number {
    if (viewedCount === 0) {
      return 0;
    }

    return (understoodCount / viewedCount) * 100;
  }

  fetchCardsNotUnderstoodCount(): void {
    this.http.get<{ cardsNotUnderstoodCount: number }>('/api/cardsNotUnderstoodCount').subscribe(data => {
      this.cardsNotUnderstoodCount.next(data.cardsNotUnderstoodCount);
    });
  }
}
