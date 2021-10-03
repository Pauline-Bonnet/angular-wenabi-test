import { VolunteersService } from './../../services/volunteers.service';
import { Volunteer } from './../../objects/volunteer';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  volunteersList!: Volunteer[];
  selectedList!: Volunteer[];

  constructor(private service: VolunteersService) { }

  ngOnInit() {
    this.getVolunteers();
  }

  getVolunteers(): void {
    this.service.getVolunteers()
        .pipe(
          tap((volunteers: Volunteer[]) => this.volunteersList = volunteers)
        ).subscribe();
  }

  filterByStatus($event): void {
    this.service.getVolunteersByStatus($event)
        .pipe(
          tap((volunteers: Volunteer[]) => this.volunteersList = volunteers)
        ).subscribe();
  }
}
