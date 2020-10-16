import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceHolderService {

  constructor(private http: HttpClient) { }

  getPostData(): Observable<any> {
    const url = "http://localhost:8000/apis/posts/"

    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  
}
