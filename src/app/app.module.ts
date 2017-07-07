import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ProjectService } from './services/project.service';

// Routing Module
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2PageScrollModule.forRoot(),
    AppRoutingModule,
    RoundProgressModule,
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
