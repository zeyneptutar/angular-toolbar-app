import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datatoolbar',
  templateUrl: './datatoolbar.component.html',
  styleUrls: ['./datatoolbar.component.css']
})
export class DatatoolbarComponent implements OnInit {
  @Input() toolbarIconsArray: Array<object>;
  constructor() { }

  ngOnInit() {
  }

}
