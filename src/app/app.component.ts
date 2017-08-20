import { Component } from '@angular/core';

import { CommunicationService, Question } from './communication.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>

    <div class="m-block">
      <app-question *ngFor="let question of questions;" [question]="question.question" [answer]="question.answer"></app-question>

      <md-toolbar class="footer" color="primary">
        <span>Footer</span>
      </md-toolbar>
    </div>
  `
})
export class AppComponent {
  public questions: Question[] = [];

  constructor(public com: CommunicationService) {}

  ngOnInit() {
    this.com.get("javascript").subscribe(
      questions => this.questions = questions
    );
  }
}
