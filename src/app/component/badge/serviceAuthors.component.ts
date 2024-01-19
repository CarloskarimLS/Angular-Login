import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServiceAuthors {
    constructor(private http: HttpClient){}

    getData(): Observable<any> {
      const url = `https://api.openalex.org/authors`;
      return this.http.get(url).pipe(
        tap(data => console.log('Service Data:', data))
      );
    }
      
}