import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// Angular Material
import { MaterialModule, OVERLAY_PROVIDERS, MdToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HeaderWidget } from './widgets/header.widget';
import { QuestionWidget } from './widgets/question.widget';

// Server
import { ServerService } from './../server';

// Service
import { CommunicationService } from './communication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderWidget,
    QuestionWidget
  ],
  imports: [
    HttpModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(ServerService),
    MaterialModule,
    BrowserAnimationsModule,
    MdToolbarModule
  ],
  providers: [
    OVERLAY_PROVIDERS,
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
