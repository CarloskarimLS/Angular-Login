import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServiceAuthors {
    constructor(private http: HttpClient){}

    getData(): Observable<any> {
      const url = `https://api.openalex.org/authors?per-page=100&page=1`;
      return this.http.get(url).pipe(
        tap(data => console.log('Service Data:', data))
      );
    }
      
    getAuthorById(id: string): Observable<any> {
      const url = `https://api.openalex.org/authors/${id}`;
      return this.http.get(url).pipe(
        tap(data => console.log('Service Data:', data))
      );
    }
}