import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Hotels } from '../models/hotels.model';

@Injectable({
  providedIn: 'root',
})
export class HotelsListService {
  private readonly HOTELS_URL = 'api/hotels.json';
  private readonly SUGGESTED_HOTELS_URL = 'api/suggested-hotels.json';
  showAlert = false;
  constructor(private _http: HttpClient) {}

  public getHotels(): Observable<Hotels[]> {
    return this._http.get<Hotels[]>(this.HOTELS_URL).pipe(
      tap((hotels) => console.log('hotels :', hotels)),
      catchError(this.handleError)
    );
  }

  public getSuggestedHotels(): Observable<Hotels[]> {
    return this._http.get<Hotels[]>(this.SUGGESTED_HOTELS_URL).pipe(
      tap((hotels) => console.log('hotels :', hotels)),
      catchError(this.handleError)
    );
  }

  public getHotelByName(): Observable<Hotels[]> {
    return this._http.get<Hotels[]>(`${this.HOTELS_URL}/`);
  }

  public putHotelFreeRooms(data: any) {
    return this._http.put<any>(this.HOTELS_URL, data);
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
