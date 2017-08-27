import { Component, EventEmitter, Output } from '@angular/core';
import { CommunicationService, Question } from './../communication.service';
declare function galaxy();

@Component({
  selector: 'app-footer',
  template: `
    <div>
        <div class="content">
        <span class="title">Demo page of <span class="thin">Mark Balyi</span></span>

        <span>This site is made in <span class="title">Angular 4</span> with <span class="title">In-memory web application</span> technology.</span>
        <span>First try of <span class="title">including Javascript libraries</span> into Angular 4 projects and creating <span class="title">animated headers</span> with JS.</span>
        <span>The questions are supported from <span class="title">different sites</span>:</span></div>

        <div class="cards">
            <md-card *ngFor="let link of links" class="languages">
                <md-card-subtitle>
                    {{link.title}}
                </md-card-subtitle>
                <md-card-header>
                    <md-card-title><span class="title">{{link.page}}</span></md-card-title>
                </md-card-header>
                <md-card-content>
                    <a md-button href="{{link.url}}">Open</a>
                </md-card-content>
            </md-card>
        </div>
    </div>
  `
})
export class FooterWidget {
    public links:any[] = [
        {title: "Javascript", page: "TopTal Developers", url: "https://www.toptal.com/javascript/interview-questions"},
        {title: "Angular", page: "Code Project", url: "https://www.codeproject.com/Articles/1169073/Angular-Interview-Questions"},
        {title: "Java", page: "Tutorials Point", url: "https://www.tutorialspoint.com/java8/java8_interview_questions.htm"}
    ];
}
