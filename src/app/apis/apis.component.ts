import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApi } from './apisjson.component';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-apis',
    templateUrl: './apis.component.html',
    styleUrls: ['./apis.component.css'],
    providers: [MyApi]
})
export class ApisComponent implements OnInit {
    works: any[] = []; 
    //I nedd to add a interface, then parse the json request
    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit(): void{
        this.http.get<any[]>('https://api.openalex.org/works?sample=20').subscribe(
        (response) => {
          this.works = response;
          console.log(response);
        },
        (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
    }

    goDashboard(): void{
        this.router.navigate(['/dashboard']);
      }
    
}