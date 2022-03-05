import { Component, OnInit } from '@angular/core';
import FragenBeispiel from '../../../assets/beispielFragen.json';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  fragen = FragenBeispiel;

  constructor() { }

  ngOnInit(): void {
  }

}
