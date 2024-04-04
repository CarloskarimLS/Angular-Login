import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MySearchService {
    constructor(private http: HttpClient){}

    getData(): Observable<any> {
      const url = `https://api.openalex.org/works`;
      return this.http.get(url).pipe(
        tap(data => console.log('Works Data:', data))
      );
    }

    getAuthors(): Observable<any> {
      const url = `https://api.openalex.org/authors?per-page=50&page=2`;
      return this.http.get(url).pipe(
        tap(data => console.log('Authors Data:', data))
      );
    }
}