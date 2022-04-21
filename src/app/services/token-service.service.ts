import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    console.log('getting token...');
    return this.http.get<any>('http://localhost:3000/api/token')
    .pipe(
      map(result => result['token']),
      tap(
        error => console.error(error),
        data => console.log(data)
      )
    );
  }

}
