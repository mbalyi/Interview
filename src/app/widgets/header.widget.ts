import { Component, EventEmitter, Output } from '@angular/core';
import { CommunicationService, Question } from './../communication.service';
declare function galaxy();

@Component({
  selector: 'app-header',
  template: `
      <div id="large-header" class="header large-header">
				<canvas id="galaxy-canvas"></canvas>
				<h1 class="main-title">
          {{siteName.split(' ')[0]}} 
          <span class="thin">{{siteName.split(' ')[1]}}</span>
        </h1>
        <h1 class="main-title btns">
          <span class="thin">
            <button *ngFor="let btn of buttons" (click)="filter(btn)" md-button>{{btn}}</button>
          </span>
        </h1>
			</div>
  `
})
export class HeaderWidget {
    public buttons: String[] = ["Javascript", "Angular", "Java 8"];
    public siteName: String = "Interview Questions";

    @Output() questions: EventEmitter<Question[]> = new EventEmitter<Question[]>();

    constructor(public com: CommunicationService){}

    ngAfterViewInit() {
      galaxy();
    }

    public filter(btn: String) {
      this.com.get(btn).subscribe(
        questions => this.questions.emit(questions)
      );
    }
}
