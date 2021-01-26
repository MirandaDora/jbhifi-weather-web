import { Injectable } from '@angular/core';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public searching$ = new BehaviorSubject(false);
  public loading$ = new BehaviorSubject(false);
  private apiKeys = [
    {key:'dmYGbJFiBC9M9Tp1xaRPaa9u4eiELI9S47XA5uwu', consumption:0, keyName: 'red'},
    {key:'RudQxCwwWsahod09NK3qi858RPvbMYm8ChLBkuqc', consumption:0, keyName: 'green'},
    {key:'5nGnEAuT5713i2JndletF4NY7IS5xXJE615pP0fo', consumption:0, keyName: 'blue'},
    {key:'3g0i2VnR3XmQST7KvuNm7DkqhiVMkAu83N3ttDkd', consumption:0, keyName: 'yellow'},
    {key:'FgA3LZAPen9OKxECldSys283rSS9CPKc2ey0qYFD', consumption:0, keyName: 'orange'}
  ]

  constructor(
    public http: HttpClient
    ) { }

  public getWeatherByCityCountry(city:string, country:string, apiKey:string): Observable<any> {
    const apiUrl = `https://iydnw7qs8d.execute-api.ap-southeast-2.amazonaws.com/development?city=${city}&country=${country}`
    const apiMethod = 'get'
    const options = {
      headers: {
        "x-api-key": apiKey 
      }
    }
    return this.http.request(apiMethod, apiUrl, options)
      .pipe(
        finalize(() => this.loading$.next(false)),
        catchError(this.handleError)
      );
  }

  public getApiKeys(): Array<any> {
    return this.apiKeys
  }

  public updateKeyConsumption(key, updateBy): Array<any> {
    // 1. which key:
    const keyLocation = this.apiKeys.findIndex(keyObj => {return keyObj.key === key})
    this.apiKeys[keyLocation].consumption += updateBy;
    return this.apiKeys;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error?.error?.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(error);
  }
}

