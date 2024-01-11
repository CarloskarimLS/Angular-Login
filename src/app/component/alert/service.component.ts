import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MyService {
    constructor(private http: HttpClient){}

    getData(): Observable<any> {
        return this.http.get('https://api.openalex.org/works?sample=20').pipe(
          tap(data => console.log('Datos del servicio:', data))
        );
      }
      
}