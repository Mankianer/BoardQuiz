import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input("round") round: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
