import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css'],
})
export class DropDownListComponent implements OnInit {
  title = 'angularAssignment';
  @Input()
  listOfOtions: any;
  @Output()
  selectedOptions: EventEmitter<string> = new EventEmitter();
  @Output()
  selectedCountrieName: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log(this.listOfOtions);
  }
  onChangeAction(value: any) {
    this.selectedOptions.emit(value.target.value);
  }
}
