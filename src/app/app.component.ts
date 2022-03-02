import { Component, VERSION } from '@angular/core';
import FragenBeispiel from '../assets/beispielFragen.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  fragen = FragenBeispiel;
}
