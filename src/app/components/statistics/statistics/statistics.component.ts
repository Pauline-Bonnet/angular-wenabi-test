import { Component, OnInit } from '@angular/core';
import { VolunteersService } from 'src/app/services/volunteers.service';
import { tap } from 'rxjs/internal/operators/tap';
import { Statistics } from 'src/app/objects/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  statistics!: Statistics[];
  total!: number;

  constructor(private service: VolunteersService) { }

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(): void {
    this.service.getStatistics()
        .pipe(
          tap((statistics: Statistics[]) => this.statistics = statistics),
          tap(() => this.calculateTotal(this.statistics))
        ).subscribe();
  }

  calculateTotal(statistics: Statistics[]): void {
    let tab = [];
    statistics.forEach(stat => tab.push(stat.count))
    this.total = tab.reduce((pre, cur) => pre + cur)
  }
}
