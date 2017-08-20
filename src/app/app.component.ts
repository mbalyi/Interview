import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>

    <div class="m-block">
      <app-question [question]="'???'" [answer]="'...'"></app-question>

      <md-toolbar class="footer" color="primary">
        <span>Footer</span>
      </md-toolbar>
    </div>
  `
})
export class AppComponent {
}
