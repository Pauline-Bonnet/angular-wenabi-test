import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/objects/volunteer';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  @Input() wish: Volunteer;

  constructor() { }

  ngOnInit() {
  }

}
