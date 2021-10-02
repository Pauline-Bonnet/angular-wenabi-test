import { Statistics } from './../objects/statistics';
import { Volunteer, VolunteerIO } from './../objects/volunteer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { StatisticsIO } from '../objects/statistics';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {

  volunteers: Volunteer[];
  VolunteerUrl = 'https://6143a763c5b553001717d062.mockapi.io/api/wishes';
  statisticsUrl = 'https://6143a763c5b553001717d062.mockapi.io/api/stats';  

  constructor(private httpClient: HttpClient) { }

  getVolunteers(): Observable<Volunteer[]> {
    return this.httpClient.
            get<VolunteerIO[]>(this.VolunteerUrl)
            .pipe(
              tap((volunteers: Volunteer[]) => this.volunteers = volunteers),
              catchError((err: HttpErrorResponse) => this.handleError(err))
            );
  }

  getStatistics(): Observable<Statistics[]> {
    return this.httpClient.
            get<StatisticsIO[]>(this.statisticsUrl)
            .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  handleError(response: HttpErrorResponse) {
    return observableThrowError(response.error || 'Server error');
  }
}
