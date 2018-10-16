import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navitoolbar',
  templateUrl: './navitoolbar.component.html',
  styleUrls: ['./navitoolbar.component.css']
})
export class NavitoolbarComponent implements OnInit {
  @Input() navigationIconsArray: Array<object>;
  constructor() { }

  ngOnInit() {
  }

}
