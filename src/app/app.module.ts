import { TagComponent } from './components/statistics/tag/tag.component';
import { CreatedDatePipe } from './services/pipe/created-date.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { ListComponent } from './components/list/list.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { StatisticsComponent } from './components/statistics/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    VolunteersComponent,
    ListComponent,
    StatisticsComponent,
    VolunteerComponent,
    CreatedDatePipe,
    TagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
