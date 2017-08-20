import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Angular Material
import { MaterialModule, OVERLAY_PROVIDERS, MdToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
