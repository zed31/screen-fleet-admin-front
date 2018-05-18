import { Injectable } from '@angular/core';

import { TV } from './tv';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ScreenFleetTV } from './screenfleet-tv';

import { catchError, map, tap } from 'rxjs/operators';


/** Url of the post api */
const URL = 'http://10.15.192.65:3000/view/tv';

/** Constent-type of the header */
const CONTENT_TYPE = 'application/json';

@Injectable()

/**
 * @class TvApiService
 * Class used to handle the ScreenFleet API service
 */
export class TvApiService {

  private httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    })
  };

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

  /**
   * Put a tv to the screen fleet API
   * @param tv The tv being posted
   */
  public putNewTv(tv: ScreenFleetTV): Observable<ScreenFleetTV> {
      return this.httpClient.put<ScreenFleetTV>(
      URL, tv, this.httpOptions
    ).pipe(
        tap(_ => console.log('Request done successfully')),
        catchError((error: any) => {
          console.log(error);
          return of(error);
        })
      );
  }

  /**
   * @constructor
   * @param httpClient The angular HttpClient
   */
  constructor(private httpClient: HttpClient) { }

}
