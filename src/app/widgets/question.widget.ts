import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  template: `
    <div class="q-block">
        <div class="question">
            {{question}}
        </div>
        <div class="answer" (click)="open()">
            <span *ngIf="!isOpen">View the answer -></span>
        </div>
    </div>
    <div class="a-block">
        {{answer}}
    </div>
  `
})
export class QuestionWidget {
    @Input() question: String = "";
    @Input() answer: String = "";

    public isOpen: Boolean = false;

    open() {

    }
}
