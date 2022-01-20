import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'SM-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() catagoryList: any;
  @Output() selectedOption = new EventEmitter<string>();
  optionSelected = '';
  selectclicked = false;

  constructor() {}

  ngOnInit(): void {}
  onClickSelect() {
    if (!this.selectclicked) {
      this.selectclicked = true;
    } else {
      this.selectclicked = false;
    }
  }
  onOptionSelect(option: string) {
    this.selectedOption.emit(option);
    this.optionSelected = option;
    this.selectclicked = false;
  }
}
