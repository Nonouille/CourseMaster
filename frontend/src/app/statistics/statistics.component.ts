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

  onViewCard(): void {
    this.incrementCardsViewedCount()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  incrementCardsViewedCount(): void {
    this.http.put<{ cardsViewedCount: number }>('/api/incrementCardsViewedCount', {}).subscribe(data => {
      const count = data.cardsViewedCount;
      this.cardsViewedCount.next(count);
    });
  }

  getCardsViewedCount(): Observable<number> {
    return this.cardsViewedCount.asObservable();
  }

  fetchCardsViewedCount(): void {
    this.http.get<{ cardsViewedCount: number }>('/api/cardsViewedCount').subscribe(data => {
      this.cardsViewedCount.next(data.cardsViewedCount);
    });
  }

  fetchCardsUnderstoodCount(): void {
    this.http.get<{ cardsUnderstoodCount: number }>('/api/cardsUnderstoodCount').subscribe(data => {
      this.cardsUnderstoodCount.next(data.cardsUnderstoodCount);
    });
  }

  fetchCardsUnderstandingCount(): void {
    this.http.get<{ cardsUnderstandingCount: number }>('/api/cardsUnderstandingCount').subscribe(data => {
      this.cardsUnderstandingCount.next(data.cardsUnderstandingCount);
    });
  }

  fetchCardsNotUnderstoodCount(): void {
    this.http.get<{ cardsNotUnderstoodCount: number }>('/api/cardsNotUnderstoodCount').subscribe(data => {
      this.cardsNotUnderstoodCount.next(data.cardsNotUnderstoodCount);
    });
  }
}
