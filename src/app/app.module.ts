import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// Angular Material
import { MaterialModule, OVERLAY_PROVIDERS, MdToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

// Server
import { ServerService } from './../server';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    InMemoryWebApiModule.forRoot(ServerService),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdToolbarModule
  ],
  providers: [
    OVERLAY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
