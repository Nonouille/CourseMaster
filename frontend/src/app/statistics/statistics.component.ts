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
  subscription?: Subscription;
  constructor(private http: HttpClient) {
    this.fetchCardsViewedCount();
  }
  onViewCard(): void {
    this.incrementCardsViewedCount()
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
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



}
