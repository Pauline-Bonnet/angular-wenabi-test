import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/objects/volunteer';
import { faHandPointRight} from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  handIcon = faHandPointRight;
  mapIcon = faMapMarkerAlt;
  userIcon = faUser;

  @Input() wish: Volunteer;

  constructor() { }

  ngOnInit() {
  }

}
