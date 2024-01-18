import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MyService {
    constructor(private http: HttpClient){}

    getData(sample: number): Observable<any> {
      const url = `https://api.openalex.org/works?sample=${sample}`;
      return this.http.get(url).pipe(
        tap(data => console.log('Datos del servicio:', data))
      );
    }
      
}