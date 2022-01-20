import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'SM-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss'],
})
export class ListDisplayComponent implements OnInit {
  @Input() displayList: any;
  @Input() displayType: any;
  constructor() {}

  ngOnInit(): void {}
}
