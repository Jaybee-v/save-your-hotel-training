import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly TEAM_URL = 'api/team.json';
  constructor(private _http: HttpClient) {}

  public getTeam(): Observable<Team[]> {
    return this._http.get<Team[]>(this.TEAM_URL).pipe(
      tap((elements) => console.log('hotels :', elements)),
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs basique
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
