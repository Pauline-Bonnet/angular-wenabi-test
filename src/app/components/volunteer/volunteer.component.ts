import { Component, Input, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/objects/volunteer';
import { faHandPointRight} from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Entry } from 'src/app/objects/profile';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {
  
  @Input() wish: Volunteer;
  handIcon = faHandPointRight;
  mapIcon = faMapMarkerAlt;
  userIcon = faUser;
  duration: string;

  constructor() { }

  ngOnInit() {
    this.getDuration();
  }

  getDuration() {
    if(this.wish.entries && this.wish.entries.length > 0) {
      this.wish.entries.forEach((entry: Entry) => {
        let time = new Date(entry.dateEnd).getTime() - new Date(entry.dateBegin).getTime();
        let hours = Math.floor((time / 1000 / 3600) % 24).toString();
        let minutes = Math.floor((time / 1000 / 60) % 60).toString();

        minutes.length < 2 ? minutes = '0' + minutes : minutes;
        
        this.duration = [hours, minutes].join('h');
      })
    }
  }
}
