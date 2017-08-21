import { Component } from '@angular/core';
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
    public buttons: String[] = ["Javascript", "Angular", "Java"];
    public siteName: String = "Interview Questions";
    ngAfterViewInit() {
      galaxy();
    }

    public filter(btn: String) {

    }
}
