import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ChangecaseDirective } from './changecase.directive';
import { RupeeboxDirective } from './rupeebox.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ChangecaseDirective,
    RupeeboxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
