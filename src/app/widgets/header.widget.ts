import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <md-toolbar class="header" color="primary">
      <span>Header</span>
      <button *ngFor="let btn of buttons" (click)="filter(btn)" md-button>{{btn}}</button>
    </md-toolbar>
  `
})
export class HeaderWidget {
    public buttons: String[] = ["Javascript", "Angular", "Java"];

    public filter(btn: String) {

    }
}
