import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service'; // Assurez-vous d'importer le service approprié
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [StatisticsService]
})
export class StatisticsComponent implements OnInit {
  cardsViewedCount: number = 0;
  private subscription?: Subscription;
  constructor(private statisticsService: StatisticsService,private cdr: ChangeDetectorRef) { }


  onViewCard(): void {
    this.statisticsService.incrementCardsViewedCount()
  }

  ngOnInit(): void {
    this.statisticsService.getCardsViewedCount().subscribe((count) => {
      this.cardsViewedCount = count;
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }



}
