import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private cardsViewedCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  incrementCardsViewedCount(): void {
    const currentValue = this.cardsViewedCount.value;
    this.cardsViewedCount.next(currentValue +1);
  }
  getCardsViewedCount(): Observable<number> {
    return this.cardsViewedCount.asObservable();
  }
}
