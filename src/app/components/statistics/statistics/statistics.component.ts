import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { VolunteersService } from 'src/app/services/volunteers.service';
import { tap } from 'rxjs/internal/operators/tap';
import { Statistics } from 'src/app/objects/statistics';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @Output() selectedStatus = new EventEmitter<string>();
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
          tap(() => this.calculateTotal(this.statistics)),
        ).subscribe();
  }

  calculateTotal(statistics: Statistics[]): void {
    let tab = statistics.map((stat: Statistics) => stat.count);
    this.total = tab.reduce((pre, cur) => pre + cur);
  }

  selectStatus(value:string): void {
    this.selectedStatus.emit(value);
  }
}
