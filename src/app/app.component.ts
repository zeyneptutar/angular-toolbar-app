import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toolbar-app';
  dataIconText = "";
  naviIconText = "";

  toolbarIconsArray = [
    {
      class: "fas fa-plus"
    },
    {
      class: "fas fa-minus"
    },
    {
      class: "fas fa-edit"
    },
    {
      class: "fas fa-copy"
    },
   
  ];

  navigationIconsArray = [
    {
      class: "fas fa-step-backward"
    },
    {
      class: "fas fa-play"
    },
    {
      class: "fas fa-play"
    },
    {
      class: "fas fa-step-forward"
    }
  ]

  public addIcon(isData) {
    if(isData)
      this.toolbarIconsArray.push({class: this.dataIconText});
    else
      this.navigationIconsArray.push({class: this.naviIconText});
  }
}
