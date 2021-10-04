import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from './statistics/progress-bar/progress-bar.component';
import { TagComponent } from './statistics/tag/tag.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ListComponent } from './list/list.component';
import { StatisticsComponent } from './statistics/statistics/statistics.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { CreatedDatePipe } from '../services/pipe/created-date.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const VOLUNTEERS_ROUTES: Routes = [
  { path: '', redirectTo: 'volunteers', pathMatch: 'full'}, 
  { path: 'volunteers', children: [
    { path: '', component: VolunteersComponent }, 
  ]}
]


@NgModule({
  declarations: [
    VolunteersComponent,
    ListComponent,
    StatisticsComponent,
    VolunteerComponent,
    TagComponent,
    ProgressBarComponent,
    CreatedDatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(VOLUNTEERS_ROUTES),
    FontAwesomeModule,
  ]
})
export class ListVolunteersModule { }
