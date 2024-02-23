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
        tap(data => console.log('Datos del servicio:', data))
      );
    }
}