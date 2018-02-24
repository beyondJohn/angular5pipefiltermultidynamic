import { Component } from '@angular/core';
import { FiltermultiPipe } from './pipes/filtermulti.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [{ title: "mr", first: "john", last: "jones" }
   ,{ title: "mr", first: "adrian", last: "jacobs" }
   ,{ title: "mr", first: "lou", last: "jones" }
   ,{ title: "ms", first: "linda", last: "hamilton" }
  ];
}
