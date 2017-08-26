import { Component } from '@angular/core';

import { CommunicationService, Question } from './communication.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header (questions)="questions = $event;"></app-header>

    <div class="m-block">
      <app-question *ngFor="let question of questions;" [question]="question.question" [answer]="question.answer"></app-question>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  public questions: Question[] = [];

  constructor(public com: CommunicationService) {}

  ngOnInit() {
    this.com.get("Javascript").subscribe(
      questions => this.questions = questions
    );
  }
}
