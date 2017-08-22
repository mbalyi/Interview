import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-question',
  template: `
    <div class="q-block" [class.open]="isOpen">
        <app-animation *ngIf="isOpen" [pHeight]="$question.nativeElement.clientHeight"
            [pWidth]="$question.nativeElement.clientWidth"
            [rowNo]="5"
            [columnNo]="40"></app-animation>
        <div class="question" #q>
            {{question}}
        </div>
        <div class="answer" (click)="open()">
            <span *ngIf="!isOpen">View the answer</span>
            <span *ngIf="isOpen">Hide answer</span>
        </div>
    </div>
    <div class="a-block" [class.open]="isOpen">
        {{answer}}
    </div>
  `
})
export class QuestionWidget {
    @Input() question: String = "";
    @Input() answer: String = "";

    @ViewChild('q') $question: ElementRef;

    public isOpen: Boolean = false;

    open() {
        this.isOpen = !this.isOpen;
    }
}
