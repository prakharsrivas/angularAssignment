import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {
  @Input()
  tableContent:any;

    ngOnInit(){
      
    console.log(this.tableContent);
    }

}