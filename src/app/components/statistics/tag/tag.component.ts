import { Component, Input, OnInit } from '@angular/core';
import { StatusName } from 'src/app/objects/statistics';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() status!: string;
  @Input() count?: number;
  color!: string;

  constructor() { }

  ngOnInit() {
    this.color = this.status.toLocaleLowerCase();
    this.status = StatusName[this.status];
  }
}
