import { StatusName } from './../../../objects/statistics';
import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from 'src/app/objects/statistics';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() stat: Statistics;
  displayedStatus: string;

  constructor() { }

  ngOnInit() {
    this.displayedStatus = StatusName[this.stat.status];
  }

}
