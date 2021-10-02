import { Component, OnInit } from '@angular/core';
import { faHandPointRight} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  handIcon = faHandPointRight;
  
  constructor() { }

  ngOnInit() {
  }

}
