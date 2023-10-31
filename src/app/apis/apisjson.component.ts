import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class MyApi {

    constructor(private http: HttpClient){}

    getWorks(): Observable<any> {
        return this.http.get('https://api.openalex.org/works?sample=20');
    }
}